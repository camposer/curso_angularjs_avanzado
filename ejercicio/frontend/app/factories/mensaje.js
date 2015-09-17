'use strict';

(function() {
	angular
		.module('myApp')
		.factory('MensajeFactory', [ MensajeFactory ]);

	function MensajeFactory() {
		this.createMensaje = function() {
			return {
				success: [],
				error: []
			};
		};

	}
})();


