const { transform } = require('lodash')
const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')

const fetchProjectTemplates = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	let response = {result: {data: [],count: 0}}
	let proceed = true

	// fetch the max limit from the env file for the DB Find API
	const max_limit = process.env.RESOURCE_MAX_FETCH_LIMIT ? parseInt(process.env.RESOURCE_MAX_FETCH_LIMIT, 10) : 1000
	// construct body for fetching project templates 
	let body = {
		"query": {
			"status": "published"
		},
		"projection": ["_id" , "title","createdBy","createdAt","description"],
		"limit" : max_limit
	}
	// custom header 
	let header = {
		'internal-access-token' : req.headers['internal_access_token'],
		'Content-Type' : 'application/json'
	}
	// enrich body if needed 
	if(req.body){
		if(req.body.search) body.query.title = {
			"$regex" : req.body.search,
			"$options" : 'i'
		}

		// check if any specific resource type is requested 
		if(req?.body?.resourceType !== undefined || req?.body?.resourceType != []){
			// flag to abort the api call if projects is not requested 
			proceed = (req?.body?.resourceType?.length != 0 && req?.body?.resourceType.includes('projects')) ? true : (req?.body?.resourceType?.length == 0 ? true : false)
		}
	}

	// fetch data from the projects service 
	const resp = proceed ? await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, header) : {}

	if (resp?.result?.length > 0) {
		let data = []
		// transform the result to fit in the service 
		resp.result.reduce((acc,item) => {
			acc = {}
			for(let key in item){
				let newKey = projectTemplateBodyTransform[key] || key
				acc[newKey] = item[key]
			}
			acc['type'] = 'projects'
			data.push(acc)
		},null)	

		response.result.data = data
	}
	
	return response
}

// configuration for body transformation 
const projectTemplateBodyTransform = {
	_id : "id",
	title : "name",
	createdAt : "created_at",
	createdBy : "created_by"
}

const projectController = {
	fetchProjectTemplates
}

module.exports = projectController
