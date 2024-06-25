const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')

const createUser = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'device-info': req.headers['device-info'],
	})
}
const updateUser = async (req, res, responses, selectedConfig) => {
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)
}

const entityTypeRead = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
}

const loginUser = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'captcha-token': req.headers['captcha-token'],
		'device-info': req.headers['device-info'],
	})
}

const readOrganization = async (req, res, selectedConfig) => {
	console.log('Query Params:', req.query)
	console.log('Path Params:', req.params)
	console.log('Request Body:', req.body)
	const body = {
		request: {
			organisationId: req.query.external_org_id,
		},
	}
	const result = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body)
	console.log(result.body)
	return result
}

const userController = {
	createUser,
	updateUser,
	entityTypeRead,
	loginUser,
	readOrganization,
}

module.exports = userController
