"use strict";
// ----------------
// Arrays
// ----------------
let names = ["Mario", "Luigi", "Peach"];
let ages = [25, 28, 24];
names.push("Bowser");
ages.push(45);
// Type inference with arrays
// array automatically infers the type to this as : string
// if i add a number , : (string | number)[]
let fruits = ["Apple", "Pear", "Banana", "Mango"];
const f = fruits[3];
// let things: (string | number | boolean)[]
let things = [1, true, "hello"];
// const t: string|number|boolean
const t = things[0];
// ----------------
// Object Literals
// -------------
let user = {
    firstName: "Mario",
    age: 25,
    id: 1,
};
user.firstName = "Peach";
// user.email= 'peach@netninja.dev' error TS2339: Property 'email' does not exist on type '{ firstName: string; age: number; id: number; }'.
user.id = 2;
// -------------
// Type inference with object literals
// -------------
// this object gets inferred the type name: string, score: number
let person = {
    name: "Luigi",
    score: 35,
};
// person.name = true ; will give you an error as it should be a string
