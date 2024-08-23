/**
 * name : controllers/project.js
 * author : Adithya Dinesh
 * Date : 22-Aug-2024
 * Description : Orchestration controller for Samiksha service
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')

/**
 * Fetch resources from Samiksha service.
 * @name fetchSamikshaTemplates
 * @param {Object} req
 * @param {Object} res
 * @param {Object} responses  
 * @returns {JSON} - List of resources
 */
/**
 * req.body = {
 * 		organization_id : 1,
 * 		resourceType : ['survey','projects']
 * }
 */


const fetchSamikshaTemplates = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	let response = {result: {data: [],count: 0}}
	let proceedToCallProjectService = true
	let resp = {}
	const max_limit = process.env.RESOURCE_MAX_FETCH_LIMIT ? parseInt(process.env.RESOURCE_MAX_FETCH_LIMIT, 10) : 1000
	// request body for samiksha service
	let body = { query : { } }

	
	if(req.body){
		
		const resourceType = req?.body?.resourceType || [];
		if (Array.isArray(resourceType) || resourceType.length > 0) {
		    const hasProjectType = resourceType.includes(common.RESOURCE_TYPE_OBSERVATION) || resourceType.includes(common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS) || resourceType.includes(common.RESOURCE_TYPE_SURVEY);
		    proceedToCallProjectService = hasProjectType || resourceType.length === 0;
			
			// body queries for samiksha service - based on specific resource type
			if(req?.body?.resourceType.includes(common.RESOURCE_TYPE_OBSERVATION)){
				body.query.type = common.RESOURCE_TYPE_OBSERVATION
				body.query.isRubricDriven = false
			}else if(req?.body?.resourceType.includes(common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS)){
				body.query.type = common.RESOURCE_TYPE_OBSERVATION
				body.query.isRubricDriven = true
			}else if(req?.body?.resourceType.includes(common.RESOURCE_TYPE_SURVEY)){
				body.query.type = common.RESOURCE_TYPE_SURVEY
			}
		}

	}
	if(proceedToCallProjectService){
		// body queries for samiksha service - generic
		body.query.isReusable = true
		body.query.isDeleted = false
		body.query.isAPrivateProgram = false
		body.query.status = common.RESOURCE_STATUS_ACTIVE
		body.projection= common.RESOURCE_PROJECTION_FIELDS
		body.limit = max_limit

		let header = {
			'internal-access-token' : req.headers['internal_access_token'],
			'Content-Type' : 'application/json',
			'X-auth-token' : req.headers['x-auth-token']
		}

		if(req?.body && req?.body?.search) body.query.name = {
			"$regex" : req.body.search,
			"$options" : 'i'
		}

		// fetch data from the service 
		resp = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, header)
	}
	
	if (resp?.result?.length > 0) {
		let data = []
		// transform the result to fit in the service 
		resp.result.reduce((acc,item) => {
			acc = {}
			for(let key in item){
				let newKey = common.RESOURCE_TRANSFORM_KEYS[key] || key
				acc[newKey] = item[key]
			}
			// check if resource is an observation with rubrics 
			// if it is observation with rubrics update the type value 
			if(item[common.RESOURCE_TYPE_KEY] == common.RESOURCE_TYPE_OBSERVATION && item[common.RESOURCE_IS_RUBRIC_DRIVEN_KEY] == true) {
				acc[common.RESOURCE_TYPE_KEY] = common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS
			}
			data.push(acc)
		},null)	

		response.result.data = data
	}
	
	return response
}

// configuration for body transformation 
const samikshaTemplateBodyTransform = {
	_id : "id",
	createdAt : "created_at",
	author : "created_by"
}

const samikshaController = {
	fetchSamikshaTemplates
}

module.exports = samikshaController
