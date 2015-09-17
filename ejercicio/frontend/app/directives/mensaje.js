'use strict';

angular
.module('myApp')
.directive('mensajes', function() {
  return {
    restrict: 'E',
    scope: {
      'success': '=',
      'error': '='
    },
    templateUrl: 'view/mensaje.html'
  };
});