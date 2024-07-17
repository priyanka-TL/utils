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
			sourceRoute: '/samiksha/v1/admin/createIndex/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/admin/createIndex/:id',
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
		{
			sourceRoute: '/samiksha/v1/files/preSignedUrls',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/files/preSignedUrls',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/files/getDownloadableUrl',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/files/getDownloadableUrl',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/details/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/details/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/verifyLink/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/verifyLink/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/fetchLink/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/fetchLink/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/getDetails/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/getDetails/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/isTargetedBasedOnUserProfile/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/isTargetedBasedOnUserProfile/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/detailsBasedOnRoleAndLocation/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/detailsBasedOnRoleAndLocation/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/forUserRoleAndLocation',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/forUserRoleAndLocation',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/addEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/addEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/addRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/addRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/removeEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/removeEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/solutions/removeRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/solutions/removeRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/addEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/addEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/addRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/addRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/removeEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/removeEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/removeRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/removeRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/join/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/join/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/details/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/samiksha/v1/programs/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/samiksha/v1/programs/list',
				type: 'GET'
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
