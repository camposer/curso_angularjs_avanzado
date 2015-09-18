'use strict';

describe('Controlador de Producto', function () {
  var productoCtrl, 
    scope;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($q, $controller, $rootScope, _MensajeFactory_, _ProductoServiceDummy_) { // MensajeFactory es inyectado por nombre
    scope = $rootScope.$new();

    productoCtrl = $controller('ProductoController', {
      $scope: scope,
      $routeParams: {},
      ProductoService: _ProductoServiceDummy_,
      MensajeFactory: _MensajeFactory_
    });

    $rootScope.$digest(); // Para aplicar cambios sobre el scope!
  }));

  it('Al iniciar carga los productos', function () {
    expect(productoCtrl.productos.length).toEqual(3);
  });

  it('Al guardar sin id debería agregar', function () {
    productoCtrl.producto = {
      nombre: 'uno',
      precio: 200
    };

    scope.guardar(true);
    
    expect(productoCtrl.mensajes.error.length).toEqual(0);
    expect(productoCtrl.mensajes.success.length).toBeGreaterThan(0);
    expect(productoCtrl.productos.length).toBeGreaterThan(3);
  });

});