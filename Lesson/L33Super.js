class Person{               //Superclass = parent class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    welcome(){
        console.log("Hello",this.name+"!");
        console.log("You are",this.age,"years old!");
    }
}

class Teacher extends Person{   //SubClass = child class
    constructor(name, age, classSize){
        super(name, age);  //connect to superclass
        this.classSize = classSize;
    }
    hello(){
        super.welcome();
        console.log("You have",this.classSize,"students in your class!");
    }
}

class Student extends Person{   //SubClass
    constructor(name, age, gpa){
        super(name, age);
        this.gpa = gpa;
    }
    hello(){
        super.welcome();
        console.log("Your gpa is",this.gpa,"!!!");
    }
}

let teacher = new Teacher("Loh", 30, 60);
let student = new Student("Jeremy", 21, 4.0);

// console.log(teacher.name);
// console.log(teacher.age);
// console.log(teacher.classSize);

// console.log(student.name);
// console.log(student.age);
// console.log(student.gpa);

teacher.hello();
student.hello();

