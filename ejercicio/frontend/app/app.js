'use strict';

// Declare app level module which depends on views, and components
angular
.module('myApp', [ 'ngRoute' ])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/productos', {
	    templateUrl: 'view/producto.html',
	    controller: 'ProductoController as ctrl'
  	});

  	$routeProvider.otherwise({redirectTo: '/productos'});
}]);