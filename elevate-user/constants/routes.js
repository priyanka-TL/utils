module.exports = {
	routes: [
		{
			sourceRoute: '/interface/v1/account/create',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			targetRoute: {
				path: '/user/v1/account/create',
				type: 'POST',
				functionName: 'createUser',
			},
		},
		{
			sourceRoute: '/interface/v1/account/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'POST',
				functionName: 'updateUser',
			},
		},
		{
			sourceRoute: '/interface/user-signup',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			targetRoute: {
				path: '/user/v1/account/create',
				type: 'POST',
				functionName: 'createUser',
			},
		},
		{
			sourceRoute: '/user/v1/account/login',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/login',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/acceptTermsAndCondition',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/acceptTermsAndCondition',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/account/resetPassword',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/resetPassword',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/generateToken',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/generateToken',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/generateOtp',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/generateOtp',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/logout',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/logout',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/account/registrationOtp',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/registrationOtp',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user/read/:userId',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/user/share',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/share',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/userRole/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/userRole/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/form/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/form/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/form/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/form/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/form/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/form/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/cloud-services/file/getSignedUrl',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/cloud-services/file/getSignedUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/admin/deleteUser',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/deleteUser',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/admin/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/admin/login',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/login',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/organization/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/organization/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/entity/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/entity/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/entity/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/entity/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/inheritEntityType',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/org-admin/inheritEntityType',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/read',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/organization/read',
				type: 'GET',
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
