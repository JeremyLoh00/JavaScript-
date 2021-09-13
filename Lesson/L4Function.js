function myDOB(){
    console.log("You born on years 2000");
}
myDOB();

function myDOB2(year){
    console.log("You born on",year);
}
myDOB2(2001);

function hello(){
    console.log("Welcome",name);
}
var name = "Jeremy";
hello();

//Return
function myAge(age){
    return age **= 2;
}

var ageNow = myAge(10);
console.log("YOU",ageNow,"NOW");