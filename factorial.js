function factorial(numbers) {
    let sum = 1;
    for (let i = 1; i <= numbers; i++) {
         sum = sum * i;
    }
    return sum;
}
console.log(factorial(10));
