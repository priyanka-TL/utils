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
		}
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
