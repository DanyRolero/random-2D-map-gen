MyMaths.factorPairsFromInt = function(numInt) {
    const result = [];
    const leftFactors = MyMaths.listOfDivisors(numInt);
    const rightFactor = MyMaths.listOfDivisors(numInt).reverse();

    for(let i = 0; i < leftFactors.length; i++) {
        result.push(new Array(leftFactors[i], rightFactor[i]));
    }
}