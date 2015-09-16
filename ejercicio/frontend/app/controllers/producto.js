'use strict';

angular.module('myApp')
.controller('ProductoController', [ '$scope', 'ProductoService', function($scope, productoService) {
	var self = this;

	self.productos = [];

	var cargarProductos = function() {
		productoService.obtenerProductos(self.productos);
	};

	cargarProductos();
		
}]);