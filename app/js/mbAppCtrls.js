'use strict';

angular.module('mbApp.controllers',[
	'mbApp.directives',
	'mbApp.services'
]).controller('navbarCtrl', function($scope, getPagesFactory) {
	getPagesFactory.pages(function(data) {
		$scope.pages = data;
	});
}).controller('pagesCtrl', function($scope, getPagesFactory, $routeParams) {
	getPagesFactory.pages(function(data) {
		$scope.page = data[$routeParams.id];
	});
}).controller('postsCtrl', function($scope, getPostsFactory) {
	getPostsFactory.posts(function(data) {
		$scope.posts = data;
	});
}).controller('expandPostCtrl', function($scope, getPostsFactory, $routeParams) {
	getPostsFactory.posts(function(data) {
		$scope.post = data[$routeParams.id];
	});
});