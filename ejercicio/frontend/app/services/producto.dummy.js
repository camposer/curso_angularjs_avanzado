'use strict';

(function() {
	angular
		.module('myApp')
		.service('ProductoServiceDummy', [ ProductoService ]);

	function ProductoService() {
		var productos = [
			{
				id: 1,
				nombre: 'uno',
				precio: 1
			},
			{
				id: 2,
				nombre: 'dos',
				precio: 2
			},
			{
				id: 3,
				nombre: 'tres',
				precio: 3
			}
		];
		var contador = 1;

		this.obtenerProductos = function() {
	        return {
	        	then: function(callback) {
	        		callback({
	        			data: productos
	        		});
	        	}
	        };
		};

		this.agregarProducto = function(producto) {
			producto.id = contador++;
			productos.push(producto);
	        return {
	        	then: function(callback) {
	        		callback();
	        	}
	        };
		};

		this.modificarProducto = function(producto) {
			var pos = buscarPos(producto.id);
			if (pos)
				productos[pos] = producto;

	        return {
	        	then: function(callback) {
	        		callback();
	        	}
	        };
		};

		this.eliminarProducto = function(id) {
			var pos = buscarPos(producto.id);
			if (pos)
				productos.splice(pos, 1);

	        return {
	        	then: function(callback) {
	        		callback();
	        	}
	        };
		}

		var buscarPos = function(id) {
			for (var i in productos)
				if (productos[i].id == id)
					return i;
		}
	}
})();
