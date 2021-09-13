//Mouse event
//element.addEventListener(type, function);

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "blue";
div.style.width = "200px";
div.style.height = "200px";

div.addEventListener("click", e => {    
    console.log("You clicked the mouse!");
    div.style.backgroundColor = "yellow";
})

div.addEventListener("mousedown", e => {    
    console.log("You holding the mouse!");
    div.style.backgroundColor = "grey";
})
div.addEventListener("mouseup", e => {    
    console.log("You let go the mouse!");
    div.style.backgroundColor = "red";
})
div.addEventListener("dbclick", e => {    
    console.log("You double clicked the mouse!");
    div.style.backgroundColor = "green";
})
div.addEventListener("mouseover", e => {    
    console.log("You entered the square!");
    div.style.backgroundColor = "purple";
})
div.addEventListener("mouseleave", e => {    
    console.log("You left the square!");
    div.style.backgroundColor = "orange";
})
div.addEventListener("contextmenu", e => {       //when you rightclick
    console.log("You opened the context menu!");
})