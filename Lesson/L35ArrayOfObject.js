class Car{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
    drive(){
        console.log("You are driving", this.model);
    }
}
let garage = [];

let car1 = new Car("Mustang", "Black");
let car2 = new Car("BMW", "White");
let car3 = new Car("Lambo", "Blue");

garage = [car1, car2, car3];

console.log(garage[0]);
console.log(garage[1].model);

for(let i=0; i<garage.length; i++){
    console.log(garage[i].color);
    garage[i].drive();
}