const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')

const createUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body.user)
}

const userController = {
	createUser,
}

module.exports = userController
