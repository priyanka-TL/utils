exports.routesConfigs = {
	services: ['user', 'mentoring'],
	routes: [
		{
			sourceRoute: '/v1/get-sessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoutes: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/v1/user-signup',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: true,
			orchestrated: true,
			targetRoutes: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
	],
}
