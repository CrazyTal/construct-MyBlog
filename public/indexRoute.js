angular.module('userRoute', [])
	.config(['$routeProvider', '$locationProvider', 
	 	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'user/view/index.html',
				controller: 'IndexController'
			})
			.when('/personal', {
				templateUrl: 'user/view/personal.html',
				controller: 'PersonalController'
			})
			.when('/talk', {
				templateUrl: 'user/view/talk.html',
				controller: 'TalkController'
			})
// article module
			.when('/article_list', {
				templateUrl: 'user/view/article/article_list.html',
				controller: 'ArticleController'
			})
			.when('/article/:article_id', {
				templateUrl: 'user/view/article/article_content.html',
				controller: 'ArticleController'
			})
// error url
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])
