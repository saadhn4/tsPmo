"use strict";
// ------
// tuples
// ------
let person = ["saad", 1, false];
// ------
// tuples example
// ------
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [50, 100];
function useCoords() {
    const lat = 100;
    const lang = 50;
    return [lat, lang];
}
const [lat, long] = useCoords();
// -------------
// named tuples
// -------------
let user;
user = ["saad", 21];
console.log(user[0]);
