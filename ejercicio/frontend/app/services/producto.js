'use strict';

(function() {
	angular
		.module('myApp')
		.service('ProductoService', [ '$http', 'BASE_URL', ProductoService ]);

	function ProductoService($http, BASE_URL) {
		this.obtenerProductos = function(productos) {
			$http
				.get(BASE_URL + '/productos')
				.success(function(resp) {
					for (var i in resp)
						productos[i] = resp[i];
				});
		};
	}
})();
