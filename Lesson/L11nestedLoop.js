var letter = window.prompt("Enter a letter");
var row = window.prompt("Enter number of rows");
var column = window.prompt("Enter number of column");

for(let i=0; i<row; i++){
    for(let j=0; j<column; j++){
       /* console.log(letter); //in console won't show detail */
       document.getElementById("shape").innerHTML += letter;
    }
    document.getElementById("shape").innerHTML += "<br>";
}