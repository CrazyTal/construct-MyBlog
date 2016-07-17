angular.module('route', [])
	.config(['$routeProvider', '$locationProvider', 
	 	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'before/view/index.html',
				controller: 'IndexController'
			})
			.when('/personal', {
				templateUrl: 'before/view/personal.html',
				controller: 'PersonalController'
			})
			.when('/talk', {
				templateUrl: 'before/view/talk.html',
				controller: 'TalkController'
			})
// article module
			.when('/article_list', {
				templateUrl: 'before/view/article/article_list.html',
				controller: 'ArticleController'
			})
			.when('/article/:article_id', {
				templateUrl: 'before/view/article/article_content.html',
				controller: 'ArticleController'
			})
// error url
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])
