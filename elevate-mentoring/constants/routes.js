exports.routesConfigs = {
	services: ['user', 'mentoring'],
	routes: [
		{
			sourceRoute: 'elevate-user-temp/v1/some-route',
			type: 'GET',
			targetRoute: 'sunbird-user/v1/some-route',
            targetType: 'GET'
            
		},
        {
			sourceRoute: '/v1/get-sessions',
			type: 'GET',
			targetRoute: '/v1/get-sessions-v1',
            targetType: 'GET'
            
		},
        {
			sourceRoute: '/v1/get-sessions',
			type: 'GET',
			targetRoute: '/v1/get-sessions-v1',
            targetType: 'GET'
            
		},
	],
}

// elevate-user-temp/v1/some-route 
// sunbird-user/v1/some-route
