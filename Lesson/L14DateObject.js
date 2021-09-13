var date;
date = new Date(); //show current date
date = new Date(2021,7,31,18,30,20); //month (0-11)
date = new Date("August 31,2021 18:50:20");

console.log(date);

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayOfMonth = date.getDate();
let hours = date.getHours();
let mins = date.getMinutes();

console.log(year);
console.log(month);
console.log(dayOfWeek);
console.log(dayOfMonth);
console.log(hours);
console.log(mins);

date.setFullYear(2020);
date.setMonth(6); //July

console.log(date);

