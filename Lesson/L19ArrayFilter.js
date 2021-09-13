let student = [12,15,18,19,20,21];

function checkAge(age){
    if(age>=18){
        return age;
    }
}

let adult = student.filter(checkAge);
let adult2 = student.map(checkAge); //will show undefined using map
console.log(adult);
console.log(adult2);

//L27 Arrow function 
adult = student.filter(age => age>=18);
console.log(adult);