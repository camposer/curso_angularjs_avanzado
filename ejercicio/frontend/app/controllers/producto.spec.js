'use strict';

describe('Controlador de Producto', function () {
  var productoCtrl, scope;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($q, $controller, $rootScope, _MensajeFactory_, _ProductoServiceDummy_) { // MensajeFactory es inyectado por nombre
    scope = $rootScope.$new();

    productoCtrl = $controller('ProductoController', {
      $scope: scope,
      $routeParams: {},
      ProductoService: _ProductoServiceDummy_,
      MensajeFactory: _MensajeFactory_
    });

    scope.$digest(); // Obliga la actualización del scope a partir de las promesas pendientes por ejecución
  }));

  it('Debería iniciar los productos al cargar', function () {
    expect(productoCtrl.productos.length).toEqual(3);
  });

  it('Debería agregar producto', function () {
    productoCtrl.producto = {
      nombre: 'uno',
      precio: 200
    };

    scope.guardar(true);
    scope.$digest(); 

    expect(productoCtrl.mensajes.error.length).toEqual(0);
    expect(productoCtrl.mensajes.success.length).toBeGreaterThan(0);
    expect(productoCtrl.productos.length).toBeGreaterThan(3);
  });

  it('Debería modificar producto', function () {
    var id = productoCtrl.productos[0].id;

    productoCtrl.producto = {
      id: id,
      nombre: 'uno',
      precio: 200
    };

    scope.guardar(true);
    scope.$digest(); 

    expect(productoCtrl.mensajes.error.length).toEqual(0);
    expect(productoCtrl.mensajes.success.length).toBeGreaterThan(0);
    expect(productoCtrl.productos.length).toEqual(3);
  });

  it('Debería eliminar producto', function () {
    productoCtrl.eliminar(productoCtrl.productos[0].id);
    scope.$digest(); 

    expect(productoCtrl.mensajes.error.length).toEqual(0);
    expect(productoCtrl.mensajes.success.length).toBeGreaterThan(0);
    expect(productoCtrl.productos.length).toEqual(2);
  });

  it('Debería mostrar producto', function () {
    productoCtrl.mostrar(productoCtrl.productos[0]);
    scope.$digest(); 

    expect(productoCtrl.producto).toEqual(productoCtrl.productos[0]);
  });

});