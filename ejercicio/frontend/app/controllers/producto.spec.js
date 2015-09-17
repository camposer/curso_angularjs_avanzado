'use strict';

describe('Controller: Producto', function () {
  var productoCtrl, 
    scope, 
    productoService, 
    MensajeFactory;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($q, $controller, $rootScope, _MensajeFactory_) { // MensajeFactory es inyectado por nombre
    scope = $rootScope.$new();

    MensajeFactory = _MensajeFactory_;

    // productoService = {
    //   obtenerProductos: function() {
    //     return {
    //       then: function(callback) {
    //         callback({
    //           data: [{
    //               id: 1,
    //               nombre: 'uno',
    //               precio: 100
    //             },
    //             {
    //               id: 2,
    //               nombre: 'dos',
    //               precio: 200
    //             },
    //                       {
    //               id: 3,
    //               nombre: 'tres',
    //               precio: 300
    //             }          
    //           ]
    //         });
    //       }

    //     };
    //   };

    productoService = {
      obtenerProductos: function() {
        var deferred = $q.defer();
        
        deferred.resolve({
          data: [{
              id: 1,
              nombre: 'uno',
              precio: 100
            },
            {
              id: 2,
              nombre: 'dos',
              precio: 200
            },
                      {
              id: 3,
              nombre: 'tres',
              precio: 300
            }          
          ]
        });

        return deferred.promise;
      }
    };

    productoCtrl = $controller('ProductoController', {
      $scope: scope,
      $routeParams: {},
      ProductoService: productoService,
      MensajeFactory: MensajeFactory
    });

    $rootScope.$digest(); // Para aplicar cambios sobre el scope!
  }));

  it('init', function () {
    expect(productoCtrl.productos.length).toEqual(3);
  });

});