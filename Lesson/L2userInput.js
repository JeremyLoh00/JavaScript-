var name = window.prompt("What is your name?");

console.log("Hello",name);

document.getElementById("buttonS").onclick = function(){
    var myName = document.getElementById("myText").value;
    console.log("Welcome",myName);
}