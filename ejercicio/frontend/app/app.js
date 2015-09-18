'use strict';

// Declare app level module which depends on views, and components
angular
.module('myApp', [ 'ngRoute' ])
.config(['$routeProvider', function($routeProvider) {

	// Es importante el orden! (esta ruta antes que la siguiente)
	$routeProvider.when('/productos/eliminar/:id', {
	    templateUrl: 'view/producto.html',
	    controller: 'ProductoController as ctrl'
  	});

	$routeProvider.when('/productos', {
	    templateUrl: 'view/producto.html',
	    controller: 'ProductoController as ctrl'
  	});


  	$routeProvider.otherwise({redirectTo: '/productos'});
}]);