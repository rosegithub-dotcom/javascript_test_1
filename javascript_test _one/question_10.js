function computeSumOrTriple(num1, num2) {
    let sum = num1 + num2;
    if (num1 === num2) {
        sum *= 3;
        console.log(`Numbers ${num1} and ${num2} are the same.`);
    } else {
        console.log(`Numbers ${num1} and ${num2} are different.`);
    }
    return sum;
}

const num1 = 3;
const num2 = 5;
const num3 = 2;
const num4 = 2;
const result = computeSumOrTriple(num3, num4);
const result2 = computeSumOrTriple(num1,num2)
console.log("Result:", result); 
console .log('Result:',result2)