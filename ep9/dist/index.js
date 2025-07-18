"use strict";
// ---------
//Interfaces
// ---------
const author1 = {
    name: "Saad",
    avatar: "./img/mario.png",
};
const newPost = {
    title: "This is a title",
    body: "wsg brother",
    tags: ["react", "javascript"],
    created_at: new Date(),
    // object inside an object basically
    author: author1,
};
console.log(newPost.author);
// ---------------------------
// as function argument types
// ---------------------------
function createPost(post) {
    console.log(`Created post, ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// -----------
// with arrays
// -----------
let posts = [];
posts.push(newPost);
