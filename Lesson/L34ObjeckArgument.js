class Car{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
}
function changeColor(car, newColor){
    car.color = newColor;
}

let car1 = new Car("Mustang", "Black");
let car2 = new Car("BMW", "White");

changeColor(car1, "Red");   // use to change color

console.log(car1);
console.log(car1.model, car1.color);
console.log(car2.model, car2.color);