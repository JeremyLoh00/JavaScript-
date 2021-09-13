let number = [1, 2, 14, 3, 25];

number.sort(); //sort will according the lowest num of the front or first num

console.log(number);

number.sort(function(x,y){
    return x-y;             //ascending order (function expression)
});
console.log(number); 

number.sort((x,y) => y - x); //descending order (arrow function)
console.log(number);