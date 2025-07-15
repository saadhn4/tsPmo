// 1

const profile = {
  username: "saad.hn",
  followers: 139,
  isVerified: false,
};

// profile.bio= 'Heyo' ; Error: Property 'bio' does not exist on type '{ username: string; followers: number; isVerified: boolean; }'.

// 2

let mixedItems: (string | number | boolean)[] = [
  "Saad",
  "Saif",
  1,
  2,
  true,
  false,
];
console.log(mixedItems);

// 3

type Todo = {
  title: string;
  completed: boolean;
};

let todos: Todo[] = [
  {
    title: "Do HW",
    completed: false,
  },
  {
    title: "Wash dishes",
    completed: true,
  },
];
