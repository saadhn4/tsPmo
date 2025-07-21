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

function logReview(review: Review) {
  console.log(
    `Review by @${review.reviewer.username} (${review.rating} stars): ${review.content}`
  );
}

logReview(reviewOne);

// 4. Customer and purchase - Ali bought a laptop for $1200(Loyalty points: 240)

interface Customer {
  name: string;
  loyaltyPoints: number;
}

interface Purchase {
  product: string;
  price: number;
  customer: Customer;
}

const customerOne: Customer = {
  name: "Ali",
  loyaltyPoints: 240,
};

const purchaseOne: Purchase = {
  product: "laptop",
  price: 1200,
  customer: customerOne,
};

function logPurchase(purchase: Purchase): void {
  console.log(
    `${purchase.customer.name} bought a ${purchase.product} for $${purchase.price} (Loyalty points: ${purchase.customer.loyaltyPoints})`
  );
}

logPurchase(purchaseOne);

// Trainer Zoya (level 5) completed 3 sessions for client Imran

interface Trainer {
  name: string;
  level: number;
}

interface Client {
  name: string;
  sessions: number;
}

const trainerOne: Trainer = {
  name: "Zoya",
  level: 5,
};

const clientOne: Client = {
  name: "Imran",
  sessions: 3,
};

function logMessage(client: Client, trainer: Trainer): void {
  console.log(
    `Trainer ${trainer.name} (level ${trainer.level}) completed ${client.sessions} sessions for client ${client.name}`
  );
}

logMessage(clientOne, trainerOne);
