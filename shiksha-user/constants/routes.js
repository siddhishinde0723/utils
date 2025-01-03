module.exports = {
	routes: [
		{
			sourceRoute: '/interface/v1/account/create',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			targetRoute: {
				path: '/user/v1/create',
				type: 'POST',
				functionName: 'createUser',
			},
		},
	]
}

