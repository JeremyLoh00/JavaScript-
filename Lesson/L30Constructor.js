class Car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year; 
    }
    drive(){
        console.log("You are driving the car!");
    }
    brake(){
        console.log("You brake the car!");
    }
}

let car1 = new Car("BMW", "G80", 2020);
let car2 = new Car("Mers", "A900", 2021);

console.log(car1.name);
console.log(car1.model);
console.log(car1.year);

console.log(car2.name);
console.log(car2.model);
console.log(car2.year);
