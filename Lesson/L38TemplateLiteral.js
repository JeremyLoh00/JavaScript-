let firstName = "Jeremy";
let lastName = "Loh";
//template literal = another way to formatting output
//simple way to print more var in same row
console.log("Hello "+firstName+ " "+lastName+"!");
console.log(`Welcome ${firstName} ${lastName}!`);       // ${} placeholder   // ` backtick

let price = 100;
let taxRate = 0.1;
let total;

console.log(`Price charge: ${price}`);
console.log(`Tax: ${price * taxRate}`);
console.log(`Total Price: ${price + (price * taxRate)}`)