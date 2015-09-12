'use strict';

angular.module('mbApp.directives',[])
.directive('navbar', function() {
	return {
		controller: 'navbarCtrl',
		restrict: 'E',
		templateUrl: 'partials/navbar.html',
	}
});