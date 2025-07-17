"use strict";
// -----
// Any type
// -----
let age;
let title;
age = 30;
age = false;
title = "hello";
title = {
    hello: "world",
};
// -----
// Any type in array
// -----
let things = [1, "2", true];
things.push({ id: 123 });
// -----
// Functions in any
// -----
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
console.log(resultOne);
