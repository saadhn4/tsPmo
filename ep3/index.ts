let age: number = 30;
let firstName: string = "Mario";
let isFictional: boolean;

age = 31;
firstName = "Luigi";
isFictional = false;

//ts automatically infers the type of these variables
let planet = "Earth";
let moons = 1;
let isLarge = false;

planet = "Saturn";
moons = 145;
isLarge = true;

//null & undefined

let something: null;
let otherThing: undefined;

// if i try to do something=10 itll give me error ; as the value can only ever be null

something = null
otherThing = undefined
