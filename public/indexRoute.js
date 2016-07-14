angular.module('route', [])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'before/article/index.html',
				controller: 'IndexController'
			})
			.otherwise({
				redirectTo: '/'
			})
	}])