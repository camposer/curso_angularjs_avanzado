'use strict';

(function() {
	angular
		.module('myApp')
		.factory('MensajeFactory', [ MensajeFactory ]);

	function MensajeFactory() {
        return {
            createMensaje: function() {
                return {
                    success: [],
                    error: []
                };            	
            }
        };
	}
})();


