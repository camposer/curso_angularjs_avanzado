'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Pruebas de aplicación', function() {


  it('Debería redirigir automáticamente a /productos', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/productos");
  });


  describe('productos', function() {

    beforeEach(function() {
      browser.get('index.html#/productos');
    });


    it('Debería mostrar el títulos de productos', function() {
      expect(element.all(by.css('h1')).first().getText()).
        toMatch(/Productos/);
    });

    it('Debería mostrar la lista de productos', function() {
      expect(element.all(by.repeater('p in ctrl.productos')).count()).toBeGreaterThan(0);
    });

    it('Debería agregar producto', function() {
      element(by.model('ctrl.producto.nombre')).sendKeys('nuevo');
      element(by.model('ctrl.producto.precio')).sendKeys('200');

      var tamanoInicial;

      element
        .all(by.repeater('p in ctrl.productos'))
        .count()
        .then(function(valor) {
          tamanoInicial = valor;
        });

        element(by.css('button[type=submit]')).click();
          
        element
            .all(by.repeater('p in ctrl.productos'))
            .count()
            .then(function(valor) {
              expect(valor).toEqual(tamanoInicial + 1);
            });

    });

  });


});
