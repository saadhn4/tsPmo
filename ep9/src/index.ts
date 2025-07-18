// ---------
//Interfaces
// ---------

interface Author {
  name: string;
  avatar: string;
}

const author1: Author = {
  name: "Saad",
  avatar: "./img/mario.png",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
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

function createPost(post: Post): void {
  console.log(`Created post, ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// -----------
// with arrays
// -----------

let posts: Post[] = [];

posts.push(newPost);