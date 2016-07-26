angular.module('adminRoute', [])
	.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/admin', {
				templateUrl: 'admin/view/adminIndex.html',
				controller: 'adminIndexController'
			})
		$locationProvider.html5Mode(true);
			
	}])