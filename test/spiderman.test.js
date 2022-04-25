const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {

        //Aquí escribimos el cóido que queremos usar tal cuál
        //Quiero poder instanciar un objeto Spiderman con esta información 
        const andrewGarfield =  new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 31, 'Sony')

        //Validamos que este codigo funcione de la forma esperada
        expect(andrewGarfield.name).toBe('Spiderman Sony')
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe('Andrew Garfield')
        expect(andrewGarfield.movies).toBe(31)
        expect(andrewGarfield.studio).toBe('Sony')
    });
  })


  /**
   * Este archivo se ejecuta con el comando:
   *    npm test test/spiderman.test.js
   */