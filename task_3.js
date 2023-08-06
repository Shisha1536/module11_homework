function getSum(x) {
    return function(y) {
        return x + y;
    };
}
console.log(getSum(5)(3));