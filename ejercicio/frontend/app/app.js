'use strict';

// Declare app level module which depends on views, and components
angular
.module('myApp', [ 'ngRoute' ])
.config(['$routeProvider', function($routeProvider) {

	// Es importante el orden!
	// Las rutas más restrictivas deben ir primero
	$routeProvider.when('/productos/eliminar/:id', {
	    templateUrl: 'view/producto.html',
	    controller: 'ProductoController as ctrl'
  	})
  	.when('/productos', {
	    templateUrl: 'view/producto.html',
	    controller: 'ProductoController as ctrl'
  	})
  	.otherwise({redirectTo: '/productos'});
}]);