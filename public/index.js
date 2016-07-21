angular.module('app', [
	// 官方依赖
	'ngRoute',
	'ngResource',
	'ngAnimate',

	// 路由
	'userRoute',

	// 控制器
	'MainController',
	'IndexController',
	'ArticleController'
])