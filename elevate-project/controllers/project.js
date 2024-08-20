const { transform } = require('lodash')
const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')

const fetchProjectTemplates = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	let response = {
		result: {
			data: [],
			count: 0
		}
	}
	// fetch data from the service 
	let resp = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, {
		"query": {
			"status": "published"
		},
		"projection": ["_id", "title", "createdBy", "createdAt", "description"]
	}, req.headers)
	if (resp?.result.length > 0) {
		let data = []
		// transform the result to fit in the service 
		resp.result.reduce((acc, item) => {
			acc = {}
			for (let key in item) {
				let newKey = projectTemplateBodyTransform[key] || key
				acc[newKey] = item[key]
			}
			data.push(acc)
		}, null)

		response.result.data = data
		response.result.count = resp.count
	}

	return response
}

// configuration for body transformation 
const projectTemplateBodyTransform = {
	_id: "id",
	title: "name",
	createdAt: "created_at",
	createdBy: "created_by"
}

const projectController = {
	fetchProjectTemplates
}

module.exports = projectController
