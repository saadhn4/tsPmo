// Problem 1: Write a Function with a Specific Return Type

// Create a function named multiplyNumbers that takes two parameters of type number and returns their product. Specify the return type explicitly.

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

// Problem 2: Function Returning an Object

// Define a function createUser that takes two parameters: username (string) and age (number). The function should return an object with these properties. Ensure you specify the return type of the function.

type User = {
  username: string;
  age: number;
};

function createUser(username: string, age: number): User {
  return {
    username,
    age,
  };
}

console.log(createUser("saad.hn", 20));

// Problem 3: Void Return Type

// Craft a function named logMessage that takes a string message and logs it to the console. This function should not return anything. Ensure the return type is correctly indicated.

function logMessage(message: string): void {
  console.log(message);
}

const result = logMessage("This is my message");

console.log(result);

// Problem 4: Sum and Average

// Create a function named sumAndAverage that takes an array of numbers as a parameter. It should return an object with two properties: sum and average, both of which should be numbers. Calculate the sum and average of the array elements.

type SAndG = {
  sum: number;
  average: number;
};

function sumAndAverage(numbers: number[]): SAndG {
  const sum = numbers.reduce((a, c) => a + c, 0);
  return {
    sum,
    average: sum / numbers.length,
  };
}

const theResult = sumAndAverage([1, 2, 3, 4, 5]);
console.log(theResult);

// Problem 6

type Analyze = {
  maxValue: number;
  minValue: number;
  average: number;
};

function analyzeNumbers(moreNumbers: number[]): Analyze {
  const maxValue = Math.max(...moreNumbers);
  const minValue = Math.min(...moreNumbers);
  const sum = moreNumbers.reduce((a, c) => a + c, 0);
  return {
    maxValue,
    minValue,
    average: sum / moreNumbers.length,
  };
}

const resultOf6 = analyzeNumbers([1, 2, 3, 4, 5, 6, 7]);
console.log(resultOf6);
