const createUser = (responses, body) => {
	console.log('CREATE USER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
	console.log(responses)
	console.log('BODY', body)
	return {
		string: 'Response from User Service',
	}
}

const userController = {
	createUser,
}

module.exports = userController
