'use strict';

angular.module('myApp')
.controller('ProductoController', [ '$scope', 'ProductoService', function($scope, productoService) {
	var self = this;

	self.productos = [];
	self.producto = {};

	$scope.guardar = function(isValid) {
		self.mensajes = {
			success: [],
			error: []
		};

		var error = function() {
			self.mensajes.error.push('Error al agregar producto');
		};
		var success = function() {
			cargarProductos();
			self.mensajes.success.push("Agregado satisfactoriamente");
		};

		if (isValid) {
			productoService.agregarProducto(self.producto).then(success, error);
		} else {
			self.mensajes.error.push("Rellene campos obligatorios");
		}
	};

	var cargarProductos = function() {
		productoService
			.obtenerProductos()
			.then(function(resp) {
				for (var i in resp.data)
					self.productos[i] = resp.data[i];
			});
	};


	cargarProductos();
		
}]);