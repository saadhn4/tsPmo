"use strict";
// type aliases
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const color1 = getRandomColor();
const color2 = getRandomColor();
console.log(color1, color2);
const userOne = {
    name: "Saad",
    score: 10,
};
function formatUser(user) {
    console.log(`My name is ${user.name} and I scored ${user.score} points`);
}
formatUser(userOne);
formatUser({ name: "Mario", score: 78 });
