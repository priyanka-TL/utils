module.exports = {
	routes: [
		{
			sourceRoute: '/scp/v1/permissions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/permissions/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/scp/v1/config/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/config/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/scp/v1/form/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/form/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/form/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/read/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/form/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/scp/v1/form/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/update/:id',
				type: 'PUT',
			},
		}
	],
}
