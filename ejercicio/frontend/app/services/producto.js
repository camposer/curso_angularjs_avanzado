'use strict';

(function() {
	angular
		.module('myApp')
		.service('ProductoService', [ '$http', 'BASE_URL', ProductoService ]);

	function ProductoService($http, BASE_URL) {
		this.obtenerProductos = function() {
			return $http
				.get(BASE_URL + '/productos');
		};

		this.agregarProducto = function(producto) {
			// $http
			// 	.post(BASE_URL + '/productos', producto)
			// 	.success(llamamePaTras)
			//  .fail(fail);

			return $http({
				url: BASE_URL + '/productos',
				method: 'post',
				headers: {
					'Content-Type': 'application/json' // Valor por defecto
				},
				data: producto
			});
		};

		this.modificarProducto = function(producto) {
			return $http
				.put(BASE_URL + '/productos/' + producto.id, producto);
		};

		this.eliminarProducto = function(id) {
			return $http.delete(BASE_URL + '/productos/' + id);
		}
	}
})();
