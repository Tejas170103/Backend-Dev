const cart = [
  { item: "Laptop", price: 50000, quantity: 1, inStock: true },
  { item: "Mouse", price: 1500, quantity: 2, inStock: true },
  { item: "Keyboard", price: 3000, quantity: 1, inStock: false }
];

const readyToShip = cart.every(product => product.inStock);

console.log(readyToShip ? "Ready to Ship" : "Wait");

const availableItems = cart.filter(product => product.inStock);

const totalBill = availableItems.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log("Available Items:", availableItems);
console.log("Total Bill:", totalBill);
