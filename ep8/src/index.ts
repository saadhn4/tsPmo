// ------
// tuples
// ------

let person: [string, number, boolean] = ["saad", 1, false];

// ------
// tuples example
// ------

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [50, 100];

function useCoords(): [number, number] {
  const lat = 100;
  const lang = 50;
  return [lat, lang];
}

const [lat, long] = useCoords();

// -------------
// named tuples
// -------------

let user: [name: string, age: number];

user = ["saad", 21];

console.log(user[0]);
