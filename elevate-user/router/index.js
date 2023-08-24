const { passThroughRequester } = require('../utils/requester')
const packageRouter = async (req, res) => {
	const targetUrl = req.baseUrl + req.sourceRoute
	const response = req.orchestrated ? null : await passThroughRequester(req, res, targetUrl)
	console.log(response)
}

module.exports = packageRouter
