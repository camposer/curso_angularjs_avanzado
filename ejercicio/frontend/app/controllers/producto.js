'use strict';

angular.module('myApp')
.controller('ProductoController', [ '$scope', '$routeParams', 'ProductoService', 'MensajeFactory', function($scope, $routeParams, productoService, MensajeFactory) {
	var self = this;

	self.productos = [];
	self.producto = {};

	$scope.guardar = function(isValid) {
		self.mensajes = MensajeFactory.createMensaje();

		var error = function() {
			self.mensajes.error.push('Error al guardar producto');
		};
		var success = function() {
			cargarProductos();
			self.mensajes.success.push("Guardado satisfactoriamente");
		};

		if (isValid) {
			if (self.producto.id)
				productoService.modificarProducto(self.producto).then(success, error);
			else
				productoService.agregarProducto(self.producto).then(success, error);
		} else {
			self.mensajes.error.push("Rellene campos obligatorios");
		}
	};

	self.eliminar = function(id) {
		self.mensajes = MensajeFactory.createMensaje();

		var success = function() {
			cargarProductos();
			self.mensajes.success.push("Producto eliminado satisfactoriamente");
		};

		var error = function() {
			self.mensajes.error.push("Ha ocurrido un error al eliminado el producto");
		};

		productoService
			.eliminarProducto(id)
			.then(success, error);
	};

	self.mostrar = function(p) {
		self.producto = angular.copy(p);
	};

	var cargarProductos = function() {
		productoService
			.obtenerProductos()
			.then(function(resp) {
				self.productos = [];
				for (var i in resp.data)
					self.productos[i] = resp.data[i];
			});

	};


	var eliminarProducto = function() {
		if ($routeParams.id) {
			self.eliminar($routeParams.id);
		}
	};

	var init = function() {
		cargarProductos();
		eliminarProducto();
	};

	init();
		
}]);