let greeting = function(){console.log("Hello")}; //function expression 

output(greeting);

function output(func){
    func();
}