const marks = [80, 85, 90, 95];

//for more control
for (let i = 0; i < marks.length; i++) {
  console.log("Index: " + i + " Marks " + marks[i]);
}
console.log("-------------------------");
//Readable and simple   | in->index
for (let idx in marks) {
  console.log("Index: " + idx + " Marks " + marks[idx]);
}

//Readable and Cleaner
for (let mark of marks) {
  console.log("Marks ", mark);
}

//example 1 for forloop
const cart = [
  { name: "apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];
const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];
const total = [...cart, ...newItems];
console.log(total);
let j;
let cost = 0;
for (let x = 0; x < total.length; x++) {
  cost = cost + total[x].price * total[x].quantity;
}
console.log(cost);
