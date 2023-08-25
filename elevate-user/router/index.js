const { passThroughRequester } = require('../utils/requester')
const packageRouter = async (req, res) => {
	const response = req.orchestrated ? null : await passThroughRequester(req, res)
	console.log(response)
}

module.exports = packageRouter
