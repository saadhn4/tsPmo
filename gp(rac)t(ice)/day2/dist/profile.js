"use strict";
// 1
const profile = {
    username: "saad.hn",
    followers: 139,
    isVerified: false,
};
// profile.bio= 'Heyo' ; Error: Property 'bio' does not exist on type '{ username: string; followers: number; isVerified: boolean; }'.
// 2
let mixedItems = [
    "Saad",
    "Saif",
    1,
    2,
    true,
    false,
];
console.log(mixedItems);
let todos = [
    {
        title: "Do HW",
        completed: false,
    },
    {
        title: "Wash dishes",
        completed: true,
    },
];
