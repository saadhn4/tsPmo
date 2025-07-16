"use strict";
// --------
// Functions
// --------
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(1, 2);
subtractTwoNumbers(8, 5);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
//return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}!`;
}
// here it infers the value of result will be a string
const result = formatGreeting('Saad', 'Hello');
console.log(result);
