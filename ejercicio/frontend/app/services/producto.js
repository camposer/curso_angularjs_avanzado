'use strict';

// (function() {
	angular
		.module('myApp')
		.service('ProductoService', [ '$http', '$scope', 'BASE_URL', ProductoService ]);

	function ProductoService($http, $scope, BASE_URL) {
		this.obtenerProductos = function() {
			$http
				.get(BASE_URL + '/productos')
				.success(function(resp) {
					$scope.productos = resp;
				});
		};
	}

// })();
