const { passThroughRequester } = require('../utils/requester')
const { orchestrationHandler } = require('../controllers/orchestrationController')
const { customHandler } = require('../controllers/customHandler')
const packageRouter = async (req, res, responses) => {
	const response = req.orchestrated 
  ? await orchestrationHandler(req, res, responses)
  : req.requiresCustomHandling
    ? await customHandler(req, res)
    : await passThroughRequester(req, res)

return response
}

module.exports = packageRouter
