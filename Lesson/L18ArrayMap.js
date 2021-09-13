let storeRM = [5,7,9,10,20];

function toUSD(value){
    value *= 4;
    return value;
}

let storeUSD = storeRM.map(toUSD);

console.log(storeRM);
console.log(storeUSD);

//L27 Arrow function 

storeUSD = storeRM.map(value => value*4);
console.log(storeUSD);