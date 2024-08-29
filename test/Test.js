/*
    - Necesito implementar un sistema de testing para javascript.
    - El sistema se estructura con test unitarios relacionados dentro de un grupo.
    - El tratamiento para el grupo es el mismo.
    - Un objeto puede tener:
        - Un resultado esperado
            - Un valor esperado.
            - Un error esperado.
            - Una igualdad esperada (un valor esperado).
        - Un mensaje en caso de error.
        - Un mensaje de exito.
        - El nombre de la función o método que se está ejecutando.
        - Los argumentos que está recibiendo.
    - Debe hacer un recuento de todos los test para mostrar estadisticas y un porcentaje de éxito.


*/

class Test {

    static testStarted = false;
    static totalTest = [];

    _startTesting() {
        if(!testStarted) testStarted = true;
    }


    //-----------------------------------------------------------------------------
    assertTrue(expresion) {
        if(expresion) {

        }

        console.log('\x1b[41m\x1b[37m%s\x1b[0m', this._getSignFuntion(values) + 'Fallido')
        totalTest.push(false);
    }

    //-----------------------------------------------------------------------------
    assertFalse() {

    }

    //-----------------------------------------------------------------------------
    assertEqual() {

    }

    //-----------------------------------------------------------------------------
    assertError() {

    }

    //-----------------------------------------------------------------------------
    _getSignFuntion(...values) {
        let message = this.fun.name + '(';
        let length = values.length;

        if(length > 0) message += String(values[0]);
        if(length > 1) {
            for(let i = 0; i < values.length; i++) message += String(values[0]);
        }

        message += ') => '
    }



}