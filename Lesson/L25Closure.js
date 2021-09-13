/*let points = 0  //user can cheat by adding step 2*/
let num = function(){

    let points = 0;

    return function(){
        points += 1;
        return points;   //Closure - Give u access outer function scope from an inner function scope (this way will save the data)
    }
}();

/*points = 100; // step 2 */

console.log(num());
console.log(num());
console.log(num());
console.log(num());
console.log(num());