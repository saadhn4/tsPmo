"use strict";
// Problem 1: Write a Function with a Specific Return Type
// Create a function named multiplyNumbers that takes two parameters of type number and returns their product. Specify the return type explicitly.
function multiplyNumbers(a, b) {
    return a * b;
}
function createUser(username, age) {
    return {
        username,
        age,
    };
}
console.log(createUser("saad.hn", 20));
// Problem 3: Void Return Type
// Craft a function named logMessage that takes a string message and logs it to the console. This function should not return anything. Ensure the return type is correctly indicated.
function logMessage(message) {
    console.log(message);
}
const result = logMessage("This is my message");
console.log(result);
function sumAndAverage(numbers) {
    const sum = numbers.reduce((a, c) => a + c, 0);
    return {
        sum,
        average: sum / numbers.length,
    };
}
const theResult = sumAndAverage([1, 2, 3, 4, 5]);
console.log(theResult);
function analyzeNumbers(moreNumbers) {
    const maxValue = Math.max(...moreNumbers);
    const minValue = Math.min(...moreNumbers);
    const sum = moreNumbers.reduce((a, c) => a + c, 0);
    return {
        maxValue,
        minValue,
        average: sum / moreNumbers.length,
    };
}
const resultOf6 = analyzeNumbers([1, 2, 3, 4, 5, 6, 7]);
console.log(resultOf6);
