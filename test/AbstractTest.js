/*
- Clase abstracta Tester
    - Contiene metodos de testeo, assert
    - Nombre
    - Contador para contabilizar cuantos test se han ejecutado, que porcentaje de test han sido exitosos.
    - Metodos para dirigir gestionar y dirigir los test.
    - Metodos para crear registros y estadisticas.

- Clase que hereda de Tester
    - Se añaden nuevas funciones de test para probar conjuntos de checks.

- Concepto de test
    - Se debe indicar su inicio con el método startTest(testName)
    - Se debe indicar su final endTest()
    - Nombre del test
    - Es un conjunto de checks
    - Es un método definido en la clase que extiende 

- Concepto de check
    - Son los métodos assert de la clase Tester <- label, actual, expected,


- Caso de uso
    1. Creo un nuevo archivo de clase que extiende a la clase Tester
    2. Creo métodos de test
*/

"use strict";

class Tester {
    testStarted = false;
    testList = [];
    messages = [];
    counter = 0;

    static setColor = {
        red: "\x1b[31m",
        green: "\x1b[32m",
        reset: "\x1b[0m",
    };

    constructor(nameTester) {
        this.name = nameTester;
    }

    //-----------------------------------------------------------------------------
    assertTrue(label, actual) {
        let result = actual === true;
        let message = '';
        message += (result)? this._greenMessage('[PASS] ') : this._redMessage('[FAIL] ');
        message += label;
        message += ' => ';
        message += result? this._greenMessage(actual) : this._redMessage(actual);
        message += ' expected' + this._greenMessage(' true');
        console.log(message);
        
    }

    //-----------------------------------------------------------------------------
    assertFalse(label, actual) {
        let result = actual === false;
        let message = '';
        message += (result)? this._greenMessage('[PASS] ') : this._redMessage('[FAIL] ');
        message += label;
        message += ' => ';
        message += result? this._greenMessage(actual) : this._redMessage(actual);
        message += ' expected' + this._greenMessage(' false');
        
        console.log(message);
    }

    //-----------------------------------------------------------------------------
    assertEqual(label, actual, expected) { 
        let result = actual === expected;
        let message = '';
        message += (result)? this._greenMessage('[PASS] ') : this._redMessage('[FAIL] ');
        message += label;
        message += ' => ';
        message += result? this._greenMessage(actual) : this._redMessage(actual);
        message += ' expected' + this._greenMessage(' ' + expected);

        console.log(message);
    }

    //-----------------------------------------------------------------------------
    assertError(label, errorExpected, func, ...args) { 
        let result;
        let actual;
        let expected = errorExpected.name;
        let message = '';

        try {
            func(...args);
            result = false;
            actual = 'No throw Error';
        }

        catch(error) {
            actual = error.name;
            result = (error instanceof errorExpected && error.message === errorExpected.message);
        }

        message += (result)? this._greenMessage('[PASS] ') : this._redMessage('[FAIL] ');
        message += label;
        message += ' => ';
        message += result? this._greenMessage(actual) : this._redMessage(actual);
        message += ' expected' + this._greenMessage(' ' + expected);

        console.log(message);
        
    }

    _assert(label, actual, expected) {

    }

    //-----------------------------------------------------------------------------
    _getSignFuntionMessage(func, ...args) {
        return func.name + "(" + args + ")";
    }

    //-----------------------------------------------------------------------------
    _testHeaderMessage() {
        let message = ''
        message += '-----------------------------------------------------------------------------\n';
        message += 'Starting testing from ' + this.name + '\n'
        message += '-----------------------------------------------------------------------------\n';
    }

    //-----------------------------------------------------------------------------
    _greenMessage(message) {
        return '\x1b[32m' + message + '\x1b[0m';
    }

    //-----------------------------------------------------------------------------
    _redMessage(message) {
        return '\x1b[31m' + message + '\x1b[0m';
    }
}