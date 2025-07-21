"use strict";
// 1
const userOne = {
    name: "John",
    email: "saad@gmail.com",
    age: 20,
};
function placeOrder(order) {
    console.log(`User ${order.user.name} placed an order for ${order.quantity}x ${order.product}`);
}
placeOrder({ product: "iPhone 14", quantity: 3, price: 1000, user: userOne });
const studentOne = { name: "Saad", id: "one", gradeLevel: 10 };
const gradeOne = { subject: "Math", score: 95, student: studentOne };
function printGradeReport(grade) {
    console.log(`${grade.student.name} (Grade ${grade.student.gradeLevel}) scored ${grade.score} in ${grade.subject}`);
}
printGradeReport(gradeOne);
const reviewerOne = {
    username: "coolguy123",
    avatar: "./mario.jpg",
    reputation: 5,
};
const reviewOne = {
    movieTitle: "John Wick",
    rating: 4.5,
    content: "Loved the cinematography",
    reviewer: reviewerOne,
};
function logReview(review) {
    console.log(`Review by @${review.reviewer.username} (${review.rating} stars): ${review.content}`);
}
logReview(reviewOne);
const customerOne = {
    name: "Ali",
    loyaltyPoints: 240,
};
const purchaseOne = {
    product: "laptop",
    price: 1200,
    customer: customerOne,
};
function logPurchase(purchase) {
    console.log(`${purchase.customer.name} bought a ${purchase.product} for $${purchase.price} (Loyalty points: ${purchase.customer.loyaltyPoints})`);
}
logPurchase(purchaseOne);
const trainerOne = {
    name: "Zoya",
    level: 5,
};
const clientOne = {
    name: "Imran",
    sessions: 3,
};
function logMessage(client, trainer) {
    console.log(`Trainer ${trainer.name} (level ${trainer.level}) completed ${client.sessions} sessions for client ${client.name}`);
}
logMessage(clientOne, trainerOne);
