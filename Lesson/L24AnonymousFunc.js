//Anonymous function means a function without declaration

(function(){
    document.getElementById("myh1").innerHTML = "Hello Jeremy!";
})();

/* 
let task = function(){ document.getElementById("myh1").innerHTML = "Welcome to my page!"; };

setTimeout(task,1000); // 1000 milliseconds = 1 second */

setTimeout(function(){
    
    document.getElementById("myh1").innerHTML = "Welcome to my page!"; }
    
    ,1000);  //this text will come out after 1 second