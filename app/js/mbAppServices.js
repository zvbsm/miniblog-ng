'use strict';

angular.module('mbApp.services',[])
.factory('getPostsFactory', function($http) {
	return {
		posts: function(callback) {
			$http.get('json/posts.json').success(callback);
		}
	}
}).factory('getPagesFactory', function($http) {
	return {
		pages: function(callback) {
			$http.get('json/pages.json').success(callback);
		}
	}
});