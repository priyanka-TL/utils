module.exports = {
	routes: [
		{
			sourceRoute: '/project/v1/userProjects/sync',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/sync',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/details',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/details',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/tasksStatus',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/tasksStatus',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/add',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/add',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/userAssigned',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/userAssigned',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/share',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/share',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/importedProjects',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/importedProjects',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/list',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/files/preSignedUrls',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/files/preSignedUrls',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/files/getDownloadableUrl',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/files/getDownloadableUrl',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/dataPipeline/userProject',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/dataPipeline/userProject',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/bulkCreate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/bulkCreate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/bulkUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/bulkUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/importProjectTemplate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/importProjectTemplate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/listByIds',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/listByIds',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/details',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/bulkCreate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/bulkCreate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/bulkUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/bulkUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/projects',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/projects',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/details',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/addRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/addRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/removeRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/removeRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/addEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/addEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/removeEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/removeEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/removeEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/removeEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/join',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/join',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/solutions/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/create',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/update',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/list',
					type: 'POST',
				}
			]
		},	
		{
			sourceRoute: '/project/v1/solutions/forUserRoleAndLocation',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/forUserRoleAndLocation',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/detailsBasedOnRoleAndLocation',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/detailsBasedOnRoleAndLocation',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/addRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/addRolesInScope',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/addEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/addEntitiesInScope',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/removeRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/removeRolesInScope',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/targetedSolutions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/targetedSolutions',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/fetchLink',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/fetchLink',
					type: 'GET',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/verifyLink',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/verifyLink',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/verifySolution',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/verifySolution',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/getDetails',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/getDetails',
					type: 'GET',
				}
			]
		},
		{
			sourceRoute: '/project/v1/solutions/removeEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/solutions/removeEntitiesInScope',
					type: 'POST',
				}
			]
		},
		{
			sourceRoute: '/project/v1/userProjects/importFromLibrary',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: [
				{
					path: '/project/v1/userProjects/importFromLibrary',
					type: 'POST',
				}
			]
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
