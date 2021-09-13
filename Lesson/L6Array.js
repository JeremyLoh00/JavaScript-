var cars = ["BMW", "Audi", "Duccati"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Mustang"); //Add an element
cars.pop(); //Drop last element

console.log(cars.length);

console.log(cars);

cars = cars.sort(); //Array with Alphabetical order
console.log(cars);

cars.reverse();     //Array with reverse Alphabetical order
console.log(cars); 

var lastCar = cars[cars.length-1]; //show last car in alternative way
console.log(lastCar);
