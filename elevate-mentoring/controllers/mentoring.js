const requesters = require('../utils/requester')
const routeConfigs = require('../constants/routes')

const createProfile = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})
}

mentoringController = {
	createProfile,
}

module.exports = mentoringController
