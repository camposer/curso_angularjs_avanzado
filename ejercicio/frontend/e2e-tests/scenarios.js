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


    it('Debería mostrar la el títulos de productos', function() {
      expect(element.all(by.css('h1')).first().getText()).
        toMatch(/Productos/);
    });

    it('Debería mostrar la el títulos de productos', function() {
      expect(element.all(by.repeater('p in ctrl.productos')).count()).toEqual(3);
    });

  });


});
