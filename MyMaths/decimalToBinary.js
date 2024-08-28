// Devuelve un número binario a partir de un número decimal
// @param decimalInt: Entero decimal a partir del cual se obtendrá en número binario
// @param minBitInt: Especifica la cantidad mínima de dígitos que debe tener el resultado.
    // Si la cantidad mínima de dígitos es mayor que la cantidad de dígitos que tiene el resultado, se antepondrán 0s.
    // Si la cantidad mínima de dígitos es menor o igual a la cantidad de dígitos que tiene el resultado, se devolverá el binario exacto.
MyMaths.decimalToBinary = function(decimalInt, minBitsInt = 0) {
    let result = decimalInt.toString(2);

    if(minBitsInt > result.length) {
        for(let x = minBitsInt - result.length; x > 0; x--) result = '0' + result;
    }
    
    return result;
}