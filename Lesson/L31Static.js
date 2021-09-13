class Car{
    static numOfCar = 0;

    constructor(name){
        this.name = name;
        Car.numOfCar += 1;
    }
   
}

let car1 = new Car("BMW");
let car2 = new Car("Mers");
let car3 = new Car("Mers");

console.log(Car.numOfCar)