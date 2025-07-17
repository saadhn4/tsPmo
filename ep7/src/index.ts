// -----
// Any type
// -----

let age: any;
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

let things: any[] = [1, "2", true];
things.push({ id: 123 });

// -----
// Functions in any
// -----

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether('hello')
console.log(resultOne);