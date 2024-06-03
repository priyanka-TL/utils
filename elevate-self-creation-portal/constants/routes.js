module.exports = {
	routes: [
		{
			sourceRoute: '/selfcreationportal/v1/permissions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/selfcreationportal/v1/permissions/list',
				type: 'GET'
			},
		}
	],
}
