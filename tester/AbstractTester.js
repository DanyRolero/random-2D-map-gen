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
    unitTestList = [];
    counter = 0;

    constructor(nameTester) {
        this.name = nameTester;
    }

    //-----------------------------------------------------------------------------
    /* startTesting(testName)
        - Se prepara un mensaje de inicio de testing
            - Encabezado con el nombre del Tester inicializado.

        - Se recorren todos los miembros del objeto
            - Si el miembro es de tipo función y se llama igual que testName
            -> Se prepara el encabezado del test unitario

    */

    //-----------------------------------------------------------------------------
    assertTrue(label, actual) {
        this._assert(label, actual, true);
    }

    //-----------------------------------------------------------------------------
    assertFalse(label, actual) {
        this._assert(label, actual, false);
    }

    //-----------------------------------------------------------------------------
    assertEqual(label, actual, expected) { 
        this._assert(label, actual, expected);
    }

    //-----------------------------------------------------------------------------
    assertError(label, errorExpected, func, ...args) { 
        let actual;
        let expected = errorExpected.constructor.name + ' => ' + errorExpected.name + ': ' + errorExpected.message.slice(0,20) + '...';

        try {
            func(...args);
            actual = 'No throw Error';
        }

        catch(error) {
            actual = error.constructor.name + ' => ' + error.name + ': ' + error.message.slice(0,20) + '...';
        }

        this._assert(label, actual, expected);
        
    }

   //-----------------------------------------------------------------------------
    _assert(label, actual, expected) {
        let result = actual === expected;

        let message = '';
        message += (result)? this._greenMessage('[PASS] ') : this._redMessage('[FAIL] ');
        message += label;
        message += ' => ';
        message += result? this._greenMessage(actual) : this._redMessage(actual);
        message += ' expected' + this._greenMessage(expected);
        return message;
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


//-----------------------------------------------------------------------------
class TestCheck {
    constructor(result, message) {
        this.result = result;
        this.message = message;
    }
}

class UnitTest {
    checkList = [];
    

    get
}
