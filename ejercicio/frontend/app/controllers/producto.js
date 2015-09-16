'use strict';

angular.module('myApp')
.controller('ProductoController', [ '$scope', 'ProductoService', function($scope, productoService) {
	var cargarProductos = function() {
		productoService.obtenerProductos();
	};

	cargarProductos();
		
}]);