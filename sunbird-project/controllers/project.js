/**
 * name : controllers/project.js
 * author : Adithya Dinesh
 * Date : 22-Aug-2024
 * Description : Orchestration controller for project
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
const {matchPathsAndExtractParams} = require('../utils/patternMatcher')
const {pathParamSetter} = require('../utils/pathParamSetter')
/**
 * Fetch project templates from projects service.
 * @name fetchProjectTemplates
 * @param {Object} req
 * @param {Object} res
 * @param {Object} responses  
 * @returns {JSON} - List of project templates
 */
/**
 * req.body = {
 * 		organization_id : 1,
 * 		resourceType : ['survey','projects']
 * }
 */

const fetchProjectTemplates = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)

	let response = { result: { data: [], count: 0 } }
	let proceedToCallProjectService = false
	let resp = {}

	// fetch the max limit from the env file for the DB Find API
	const max_limit = process.env.RESOURCE_MAX_FETCH_LIMIT ? parseInt(process.env.RESOURCE_MAX_FETCH_LIMIT, 10) : 1000

	if (req.body) {
		// check if body has key resourceType else assign []
		const resourceType = req?.body?.resourceType || [];
		if (Array.isArray(resourceType) && resourceType.length > 0) {
			// if resource type have type = projects proceed to call api 
			proceedToCallProjectService = resourceType.includes(common.RESOURCE_TYPE_PROJECT);
		}else if(resourceType.length == 0){
			// if resource type have type = empty call API because the client is expecting all type of resources 
			proceedToCallProjectService = true	
		}
	}

	if (proceedToCallProjectService && req.headers[common.AUTH_TOKEN_KEY]) {
		let reqBody = {
			"query": {
				"status": common.PROJECT_STATUS_PUBLISHED
			},
			"projection": common.PROJECT_PROJECTION_FIELDS,
			"limit": max_limit
		}

		// custom header 
		const header = {}
		// replace the word bearer if token has it 
		header[common.AUTH_TOKEN_KEY] = req.headers[common.AUTH_TOKEN_KEY].replace(/^(Bearer|bearer)\s*/, '')
		header[common.INTERNAL_ACCESS_TOKEN] = req.headers['internal_access_token']
		header[common.HEADER_CONTENT_TYPE] = 'application/json'

		if (req?.body && req.bod?.search) {
			reqBody.query.title = {
				"$regex": req.body.search,
				"$options": 'i'
			}
		}
		resp = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, reqBody , header)
	}

	if (resp?.result?.length > 0) {
		let data = []
		// transform the result to fit in the service 
		resp.result.reduce((accumulateResource, projects) => {
			accumulateResource = {}
			for (let project in projects) {
				let newKey = common.PROJECT_TRANSFORM_KEYS[project] || project
				accumulateResource[newKey] = projects[project]
			}
			accumulateResource['type'] = common.RESOURCE_TYPE_PROJECT
			data.push(accumulateResource)
		}, null)

		response.result.data = data
	}

	return response
}

const projectsList = async (req, res) => {
	const selectedConfig = routeConfigs.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)
	let targetedRoutePath = selectedConfig.targetRoute.path
	// Add the query params to the request call
	Object.keys(req.query).map((key) => {
		if(targetedRoutePath.includes('?')){
			targetedRoutePath = targetedRoutePath + `&${key}=${req.query[key]}`
		}else{
			targetedRoutePath = targetedRoutePath + `?${key}=${req.query[key]}`
		}
	})
	// Set status=completed in query based on req.body
	if("filter" in req.body && req.body.filter == "submittedCount"){
		if(targetedRoutePath.includes('?')){
			targetedRoutePath = targetedRoutePath + `&status=completed`
		}else{
			targetedRoutePath = targetedRoutePath + `?status=completed`
		}
		delete req.body["filter"]
	}
	return await requesters.post(req.baseUrl, targetedRoutePath, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
}

const attachToken = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)
	let targetedRoutePath = selectedConfig.targetRoute.path
	const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
	const targetRoute = pathParamSetter(targetedRoutePath, params)
	let response = await requesters.get(req.baseUrl, targetRoute, {
		"Authorization": `Bearer ${process.env.BEARER_TOKEN}`,
		"x-authenticated-user-token": req.headers["x-auth-token"]
	}, req.body)
	response["result"] = response.result.response
	let userProfileLocation = response["result"]["profileLocation"]
	response["result"]["profileLocation"] = {}
	userProfileLocation.forEach(ele => {
		response["result"]["profileLocation"][`${ele.type}`] = ele.id
	})
	return response
}

const createLocationReqBody = async (req, res, selectedConfig) => {
	let targetedRoutePath = selectedConfig.targetRoute.path
	const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
	const targetRoute = pathParamSetter(targetedRoutePath, params)

	let bodyData = {}
	bodyData["request"] = {}
	bodyData["request"]["filters"] = {}
	if("_id" in req.body){
		bodyData["request"]["filters"] = {
			"id" : req.body._id
		}
	}
	if("code" in req.body){
		bodyData["request"]["filters"] = {
			"code" : req.body.code
		}
	}
	console.log(req.baseUrl, targetRoute, bodyData)
	let response = await requesters.post(req.baseUrl, targetRoute, bodyData, {
		"Authorization": `Bearer ${process.env.BEARER_TOKEN}`,
	})

	return res.json(response)
}
/*The profileRead API retrieves and transforms user profile information from an external service (e.g., Sunbird's user service). 
The function processes and restructures the data into a format 
suitable for the Elevate Project frontend application.*/

const profileRead = async (req, res, selectedConfig) => {
	try {
		// if passed api config has service value defined. We are getting the baseURl of that service from env of Interface service
		if(selectedConfig.service){
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
		let targetedRoutePath = selectedConfig.targetRoute.path
		const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(targetedRoutePath, params)
		
		// Fetch user profile details
		let userProfileData = await requesters.get(req.baseUrl, targetRoute, {
			"Authorization": `Bearer ${process.env.BEARER_TOKEN}`,
			"x-authenticated-user-token": req.headers["x-auth-token"]
		}, req.body)
		
		// confirm success response
		if (userProfileData.responseCode === 'OK') {
			
			userProfileData["result"] = userProfileData.result.response
		
			//generate role data for EP
			if (userProfileData.result.profileUserTypes && userProfileData.result.profileUserTypes.length > 0) {
				
				// Create a new user_roles array with transformed data
				userProfileData.result.user_roles = userProfileData.result.profileUserTypes.map(ele => {
					return {
						title: ele.subType // map subType to title
					};
				});
				
			}
			// generate location data of user for EP
			if (userProfileData.result.profileLocation && userProfileData.result.profileLocation.length > 0) {
				userProfileData.result.profileLocation.forEach(location => {
					// Set each location's type as a key in userProfileData.result with the id as value
					userProfileData.result[location.type] = {
						value: location.id
					};
				});
			}
			res.json(userProfileData)
		} else {
	
			if(process.env.DEBUG_MODE == "true"){
				console.log("profileRead error",JSON.stringify(userProfileData));
			}
			res.json(userProfileData)
		
		}

	}  catch (error) { 
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching user details:', error)
		}
		res.status(500).json({ error: 'Internal Server Error' })

	}
}

const projectController = {
	fetchProjectTemplates,
	projectsList,
	profileRead,
	createLocationReqBody
}

module.exports = projectController
