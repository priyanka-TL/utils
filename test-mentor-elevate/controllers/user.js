const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')

const createUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body)
}
const updateUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	const filteredRequestBody = requestParser.transformUpdateUserBody(req.body)
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, filteredRequestBody, req.headers)
}
const userController = {
	createUser,
	updateUser,
}

module.exports = userController
