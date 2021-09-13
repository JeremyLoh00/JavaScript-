let total = 0;
let cart = [5,6,7,8,9];

function checkOut(price){
    total += price;
}

cart.forEach(checkOut);
console.log("Total Price $"+total); 


