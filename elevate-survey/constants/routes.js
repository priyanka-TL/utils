module.exports = {
	routes: [
		{
			sourceRoute: '/samiksha/v1/admin/createIndex/solutions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/admin/createIndex/solutions',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/polls/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/polls/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/polls/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/polls/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/polls/getPollQuestions/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/polls/getPollQuestions/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/pollSubmissions/make/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/pollSubmissions/make/:id',
				type: 'POST'
			},
		},
	],
}

/* const fs = require('fs')
const modifiedArray = [].map((item) => ({
	...item,
	targetRoute: {
		path: item.sourceRoute,
		type: item.type,
	},
}))
const modifiedArrayJSON = JSON.stringify(modifiedArray, null, 2)
const filePath = 'modifiedArray.json'
fs.writeFile(filePath, modifiedArrayJSON, 'utf8', (err) => {
	if (err) {
		console.error('Error writing to file:', err)
	} else {
		console.log('Modified array has been written to', filePath)
	}
}) */
