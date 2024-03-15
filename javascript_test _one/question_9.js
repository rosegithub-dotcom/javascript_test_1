function createFibonacci() {
    let fibonacci = [1, 1];
    let r = 2;
    while (fibonacci[r - 1] + fibonacci[r - 2] <= 100) {
        fibonacci[r] = fibonacci[r - 1] + fibonacci[r - 2];
        r++;
    }
    return fibonacci;
}

// Print Fibonacci numbers up to 100
const fibonacciSeries = createFibonacci();
console.log("Fibonacci Numbers up to 100:");
console.log(fibonacciSeries.join(', '));