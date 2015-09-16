'use strict';

angular.module('myApp')
.controller('ProductoController', [ 'ProductoService', function(productoService) {
	var self = this;

	self.productos = [];

	var cargarProductos = function() {
		productoService.obtenerProductos(self.productos);
	};

	cargarProductos();
		
}]);