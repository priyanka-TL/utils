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
		}
	],
}
