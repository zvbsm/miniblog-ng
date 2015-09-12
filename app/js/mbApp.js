'use strict';

angular.module('mbApp',[
	'ngRoute', 
	'mbApp.controllers'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
	  templateUrl: 'views/posts.html',
	  controller: 'postsCtrl'
	}).when('/page/:id', {
	  templateUrl: 'views/pages.html',
	  controller: 'pagesCtrl'
	}).when('expandpost/:id', {
		templateUrl: 'views/post.html',
		controller: 'expandPostCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);