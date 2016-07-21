angular.module('adminRoute', [])
	.config(['$routeProvider', '$locationProvider', 
	function($routeProvider,$locationProvider) {
		$routeProvider
			.when('/admin/', {
				templateUrl: '/public/admin/index.html',
				controller: 'adminIndexController'
			})
		$locationProvider.html5Mode(true);
			
	}])