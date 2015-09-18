'use strict';

(function() {
	angular
		.module('myApp')
		.service('ProductoServiceDummy', [ '$q', ProductoService ]);

	function ProductoService($q) {
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
			var deferred = $q.defer();

			deferred.resolve({
	        	data: productos
	        });

			return deferred.promise;
		};

		this.agregarProducto = function(producto) {
			producto.id = contador++;
			productos.push(producto);

	        return $q(function(resolve, reject) {
	        	resolve();
	        });
		};

		this.modificarProducto = function(producto) {
			var pos = buscarPos(producto.id);

			if (pos)
				productos[pos] = producto;

	        return $q(function(resolve, reject) {
	        	if (pos)
	        		resolve();
	        	else
	        		reject();
	        });
		};

		this.eliminarProducto = function(id) {
			var pos = buscarPos(id);
			if (pos)
				productos.splice(pos, 1);

	        return $q(function(resolve) {
	        	resolve();
	        });
		}

		var buscarPos = function(id) {
			for (var i in productos)
				if (productos[i].id == id)
					return i;
		}
	}
})();
