// Devuelve una lista array con todos los divisores de un número dado
MyMaths.listOfDivisors = function(numInt) {
    if(!Number.isInteger(numInt) || numInt < 1) throw new Error("MyMaths.listOfDivisors(): El valor proporcionado debe ser un número entero mayor que 0");
    
    const maxDivisor = (numInt >> 1) + 1;
    const disvisorsListResult = [];

    for(let i = 1; i < maxDivisor; i++) {
        if(numInt % i == 0) disvisorsListResult.push(i);
    }

    disvisorsListResult.push(numInt);

    return disvisorsListResult; 
}