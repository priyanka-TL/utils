const orchestrationHandler = (req, res) => {
	console.log(req.targetPackages, req.inSequence, req.orchestrated, req.sourceRoute)
}

const orchestrationController = {
	orchestrationHandler,
}
module.exports = orchestrationController
