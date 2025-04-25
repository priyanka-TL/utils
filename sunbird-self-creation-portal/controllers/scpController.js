/**
 * name : controllers/scpController.js
 * author : Priyanka Pradeep
 * Date : 24-Apr-2025
 * Description : Orchestration controller for scp
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
const { matchPathsAndExtractParams } = require('../utils/patternMatcher')
const { pathParamSetter } = require('../utils/pathParamSetter')

const fetchLocationDetails = async (req, res, selectedConfig) => {
	try {
		// validate the body, if body is not present throw error
		if (!(Object.keys(req['body']).length > 0) || !(Object.keys(req['body']['query']).length > 0)) {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('req.body cannot be empty')
			}
			res.status(500).json('Internal Server Error')
		}

		// if passed api config has service value defined. We are getting the baseURl of that service from env of Interface service
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
		let targetedRoutePath = selectedConfig.targetRoute.path
		const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(targetedRoutePath, params)

		// prepare req.body to match sunbird location API req.body
		let bodyData = {}
		bodyData['request'] = {}
		bodyData['request']['filters'] = {}
		if ('_id' in req.body.query) {
			if (typeof req.body.query._id == 'object') {
				bodyData['request']['filters'] = {
					id: req.body.query._id['$in'],
				}
			} else {
				bodyData['request']['filters'] = {
					id: req.body.query._id,
				}
			}
		}
		if ('code' in req.body.query) {
			if (typeof req.body.query.code == 'object') {
				bodyData['request']['filters'] = {
					code: req.body.query.code['$in'],
				}
			} else {
				bodyData['request']['filters'] = {
					code: req.body.query.code,
				}
			}
		}

		if ('metaInformation.name' in req.body.query) {
			bodyData['request']['filters'] = {
				name: req.body.query['metaInformation.name'],
			}
		}

		if ('entityType' in req.body.query) {
			bodyData['request']['filters']['type'] = req.body.query.entityType['$in']
		}

		// fetch location details
		let locationDetails = await requesters.post(req.baseUrl, targetRoute, bodyData, {
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
		})

		// confirm success response
		if (locationDetails.responseCode === 'OK') {
			locationDetails['result'] = locationDetails.result.response
			locationDetails['status'] = 200

			// modify the response to be compatible with EP
			if (locationDetails.result.length > 0) {
				locationDetails.result.map((location) => {
					location['_id'] = location.id
					location['registryDetails'] = {
						code: location.code,
					}
					location['metaInformation'] = {
						name: location.name,
					}
					location['entityType'] = location.type
				})
			}
		} else {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('location API error', JSON.stringify(locationDetails))
			}
			res.json(locationDetails)
		}

		res.json(locationDetails)
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching location details:', error)
		}
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
/*The profileRead API retrieves and transforms user profile information from an external service (e.g., Sunbird's user service). 
The function processes and restructures the data into a format 
suitable for the Elevate Project frontend application.*/

const profileRead = async (req, res, selectedConfig) => {
	try {
		// if passed api config has service value defined. We are getting the baseURl of that service from env of Interface service
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
		let targetedRoutePath = selectedConfig.targetRoute.path
		const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(targetedRoutePath, params)

		// Fetch user profile details
		let userProfileData = await requesters.get(
			req.baseUrl,
			targetRoute,
			{
				Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
				'x-authenticated-user-token': req.headers['x-auth-token'],
			},
			req.body
		)

		// confirm success response
		if (userProfileData.responseCode === 'OK') {
			userProfileData['result'] = userProfileData.result.response

			//generate role data for EP
			if (userProfileData.result.profileUserTypes && userProfileData.result.profileUserTypes.length > 0) {
				// Create a new user_roles array with transformed data
				userProfileData.result.user_roles = userProfileData.result.profileUserTypes.map((ele) => {
					return {
						title: ele.subType && ele.subType !== '' ? ele.subType : ele.type, // map subType to title if not empty. if it is empty take value from type
					}
				})
			}

			// generate location data of user for EP
			if (userProfileData.result.profileLocation && userProfileData.result.profileLocation.length > 0) {
				// if profile location is available get ids of location and fetch complete data of location by calling sunbird's location search API
				const locationIds = userProfileData.result.profileLocation.map((location) => location.id)

				// Create location search api call request body
				const bodyData = {
					request: {
						filters: {
							id: locationIds,
						},
					},
				}

				// Call location details fetcher
				const locationData = await getLocationDetails(bodyData, req.baseUrl)
				if (locationData.length > 0) {
					locationData.forEach((location) => {
						// Set each location's type as a key in userProfileData.result with the id as value
						userProfileData.result[location.type] = {
							value: location.id,
							label: location.name,
						}
					})
				}
			}

			// generate name for EP
			userProfileData.result['name'] = userProfileData.result.userName
			res.json(userProfileData)
		} else {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('profileRead error', JSON.stringify(userProfileData))
			}
			res.json(userProfileData)
		}
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

const readOrganization = async (req, res, selectedConfig) => {
	// Constructing the request body to fetch organization details
	const body = {
		request: {
			// Extracting organisation ID or code from query parameters
			organisationId: req.query.organisation_id || req.query.organisation_code,
		},
	}

	try {
		// If the selected API config has a defined service, set the base URL dynamically
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		// Sending a POST request to the target service API
		const response = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'], // Passing device info from request headers
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`, // Authorization token from environment variables
		})

		// Logging response in debug mode for troubleshooting
		if (process.env.DEBUG_MODE == 'true') {
			console.log('RESPONSE:', response)
			console.log('RESPONSE.RESULT:', response?.result)
		}

		// Constructing the final response object with relevant data
		const responseData = {
			result: {
				id: response.result.response.id,
				name: response.result.response.orgName,
				related_orgs: [], // Placeholder for related organizations (if needed in future)
			},
			responseCode: response.responseCode, // Including response code from API response
		}

		// Sending the final response to the client
		return res.json(responseData)
	} catch (error) {
		// Logging error details in debug mode if enabled
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching organization details:', error)
		}
		// Returning a generic internal server error response
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

/**
 * This function calls sunbird's location search api
 * @param {Object} bodyData - Body data for api call
 * @param {*} baseUrl - Base url
 * @returns
 */
const getLocationDetails = async (bodyData, baseUrl) => {
	try {
		// setting API end point and making the call
		const apiEndpoint = '/api/data/v1/location/search'
		const locationDetails = await requesters.post(baseUrl, apiEndpoint, bodyData, {
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
		})

		// Verifying the response
		if (locationDetails.responseCode === 'OK' && locationDetails.result?.response?.length > 0) {
			return locationDetails.result.response
		} else {
			if (process.env.DEBUG_MODE === 'true') {
				console.log('Location API error', JSON.stringify(locationDetails))
			}
			return []
		}
	} catch (error) {
		if (process.env.DEBUG_MODE === 'true') {
			console.error('Error in getLocationDetails:', error)
		}
		return []
	}
}

const readUserById = async (req, res, selectedConfig) => {
	const userId = req.params.id
	try {
		console.log('read by userid')
		const targetRoute1 = selectedConfig.targetRoute.paths[0].path
		const targetRoute2 = selectedConfig.targetRoute.paths[1]

		const userResponse = await requesters.get(req.baseUrl, targetRoute1, req.headers, {
			id: userId,
		})

		if (process.env.DEBUG_MODE == 'true') {
			console.log('READ API response status:', userResponse.params.status)
			console.log(' user read API resp ==  ', JSON.stringify(userResponse))
			console.log(' API Response', JSON.stringify(userResponse))
		}
		if (userResponse.params.status == 'FAILED') {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('userResponse.params.status ', userResponse.params.status)
				console.log('userResponse.params.status ', JSON.stringify(userResponse))
			}
			return res.send(userResponse)
		}
		const enrollmentResponse = await requesters.get(targetRoute2.baseUrl, targetRoute2.path, req.headers, {
			id: userId,
		})

		if (process.env.DEBUG_MODE == 'true') {
			console.log('CALLING COMPETENCY ')
		}

		let competencyIds = []
		if (enrollmentResponse.result && enrollmentResponse.result.courses) {
			competencyIds = getCompetencyIds(enrollmentResponse.result.courses || [])
		}

		if (process.env.DEBUG_MODE == 'true') {
			console.log('competencyIds ==', competencyIds)
			console.log('userResponse profile response ', userResponse)
		}
		const responseData = processUserResponse(userResponse)
		responseData.result.competency = competencyIds

		if (process.env.DEBUG_MODE == 'true') {
			console.log('RESPONSE DATA: ', JSON.stringify(responseData, null, 3))
		}
		responseData.responseCode = 'OK'
		return res.send(responseData)
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processUserSearchResponse = (content) => {
	if (process.env.DEBUG_MODE == 'true') {
		console.log('============ user Details  ====================', content)
	}
	return {
		result: content.map((user) => {
			console.log(user)
			return {
				id: user.id,
				image: user?.profileDetails?.profileImageUrl,
				name: user?.profileDetails?.personalDetails?.firstname,
				organization: {
					id: user?.rootOrgId,
					name: user?.rootOrgName,
				},
				email: user?.profileDetails?.personalDetails?.primaryEmail,
			}
		}),
	}
}

const accountList = async (req, res, selectedConfig) => {
	const body = {
		request: {
			filters: {
				userId: [],
			},
		},
	}
	try {
		const userIds = req.body.userIds
		if (process.env.DEBUG_MODE == 'true') {
			console.log('------- ================ -------', req.body)
		}
		// if (Array.isArray(userIds)) throw Error('req.body.userIds is not an array.')
		body.request.filters.userId = userIds
		const userSearchResponse = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {})
		return res.json(processUserSearchResponse(userSearchResponse.result.response.content))
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}
scpController = {
	readUserById,
	profileRead,
	fetchLocationDetails,
	readOrganization,
	accountList,
}

module.exports = scpController
