module.exports = {
	routes: [
		{
			sourceRoute: '/mentoring/v1/entity/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/read/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/read/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/details',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/details/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/share',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/share',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/share/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/share/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/enroll',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/enroll',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/enroll/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/enroll/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/unEnroll',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/unEnroll',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/unEnroll/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/unEnroll/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/start',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/start/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/update',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/feedback',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/feedback/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/updateRecordingUrl',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/updateRecordingUrl/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/completed',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/completed/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/getRecording',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/sessions/getRecording/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/mentees/sessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/mentoring/v1/mentees/joinSession',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/joinSession',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/joinSession/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/joinSession/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/homeFeed',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/homeFeed',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/reports',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/reports',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/profile',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/profile',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/update',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/getMenteeExtension/',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/getMenteeExtension/',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/deleteMenteeExtension',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/deleteMenteeExtension',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/reports',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/reports',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/profile',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/profile',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/profile/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/profile/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/upcomingSessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/upcomingSessions',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/upcomingSessions/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/upcomingSessions/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/share',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/share',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/share/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/share/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/update',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/getMentorExtension',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/getMentorExtension',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/deleteMentorExtension',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/deleteMentorExtension',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/feedback/submit',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/feedback/submit',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/feedback/submit/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/feedback/submit/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/feedback/forms',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/feedback/forms',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/update',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/update/:id',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/read/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questionsSet/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questionsSet/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questionsSet/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questionsSet/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questionsSet/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questionsSet/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questionsSet/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questionsSet/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questionsSet/read/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questionsSet/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/users/pendingFeedbacks',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/users/pendingFeedbacks',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/users/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/users/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/issues/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/issues/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/platform/config',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/platform/config',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/admin/userDelete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/admin/userDelete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/interface/v1/account/create',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/mentoring/v1/profile/create',
				type: 'POST',
				functionName: 'createProfile',
			},
		},
		{
			sourceRoute: '/interface/v1/account/update',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/mentoring/v1/profile/update/',
				type: 'POST',
				functionName: 'updateUser',
			},
		},
	],
}
