// 1

interface User {
  name: string;
  email: string;
  age: number;
}

interface Order {
  product: string;
  quantity: number;
  price: number;
  user: User;
}

const userOne: User = {
  name: "John",
  email: "saad@gmail.com",
  age: 20,
};

function placeOrder(order: Order): void {
  console.log(
    `User ${order.user.name} placed an order for ${order.quantity}x ${order.product}`
  );
}

placeOrder({ product: "iPhone 14", quantity: 3, price: 1000, user: userOne });

// 2

interface Student {
  name: string;
  id: string;
  gradeLevel: number;
}

interface Grade {
  subject: string;
  score: number;
  student: Student;
}

const studentOne: Student = { name: "Saad", id: "one", gradeLevel: 10 };
const gradeOne: Grade = { subject: "Math", score: 95, student: studentOne };

function printGradeReport(grade: Grade): void {
  console.log(
    `${grade.student.name} (Grade ${grade.student.gradeLevel}) scored ${grade.score} in ${grade.subject}`
  );
}

printGradeReport(gradeOne);

// 3. Movies and Reviews
// Interfaces:

// Reviewer (username, avatar, reputation)

// Review (movieTitle, rating, content, reviewer: Reviewer)

// Task:

// Write a function logReview(review: Review): void that prints:

// "Review by @coolguy123 (4.5 stars): Loved the cinematography!"

interface Reviewer {
  username: string;
  avatar: string;
  reputation: number;
}

interface Review {
  movieTitle: string;
  rating: number;
  content: String;
  reviewer: Reviewer;
}

const reviewerOne: Reviewer = {
  username: "coolguy123",
  avatar: "./mario.jpg",
  reputation: 5,
};

const reviewOne: Review = {
  movieTitle: "John Wick",
  rating: 4.5,
  content: "Loved the cinematography",
  reviewer: reviewerOne,
};

function logReview(review: Review){
  console.log(`Review by @${review.reviewer.username} (${review.rating} stars): ${review.content}`);
}

logReview(reviewOne)