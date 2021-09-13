class Car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year; 
    }
    drive(){
        console.log("You are driving",this.name,"!");
    }
    brake(){
        console.log("You brake your",this.model);
    }
    whatIsThis(){
        return this;
    }
}

let car1 = new Car("BMW", "G80", 2020);
let car2 = new Car("Mers", "A900", 2021);

console.log(car1.whatIsThis());
console.log(car2.whatIsThis());

car1.brake();
car2.drive();