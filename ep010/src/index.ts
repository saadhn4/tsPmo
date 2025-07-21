// type aliases

// example 1 - tuple

// type has = but interface does not

type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const color1 = getRandomColor();
const color2 = getRandomColor();
console.log(color1, color2);

// example 2 - object literal

type User = {
  name: string;
  score: number;
};

const userOne: User = {
  name: "Saad",
  score: 10,
};

function formatUser(user: User): void {
  console.log(`My name is ${user.name} and I scored ${user.score} points`);
}

formatUser(userOne);
formatUser({name: "Mario", score: 78})
