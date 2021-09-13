class Alive{                //parent class
    constructor(){
        this.alive = true;
    }
    eat(){
        console.log("This animal is eating!");
    }
}
class Tiger extends Alive{              //chill class
    run(){
        console.log("The tiger is runnig!");
    }
}
class Rabbit extends Alive{  
    jump(){
       console.log("The rabbit is jumping!"); 
    }
}
class Hawk extends Alive{  
    fly(){
        console.log("The hawk is flying in the sky!");
    }
}

let tiger = new Tiger;
let rabbit = new Rabbit;
let hawk = new Hawk;

console.log(tiger.alive);

tiger.eat();
tiger.run();
rabbit.jump();
hawk.fly();