//Level 1
let hello;

hello = function(){         //function expression
    return "HEllO WORLD!";
}

console.log(hello());

hello = () => "HELLO WORLD!!!";  //functionName = (empty or more than 2 hv to use parenthesis) => return what 
console.log(hello());   // Arrow function 

//Level 2
let hi;
let x = "Heyyy";

hi = function(x){
    return x + "Jeremy!";
}
console.log(hi(x));

hi = x => x + "Jeremy";
console.log(hi(x));

//Level 3
let greet;
let y = "Bro";

greet = function(x,y){
    console.log(x);
    console.log(y);
}
greet(x,y);

greet = (x,y) => {console.log(x);
                  console.log(y)};
greet(x,y);
