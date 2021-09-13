let message;

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myid").innerHTML = output;
}

function setMessages(text, callback){
    message = text;
    callback(message); //callback - passed an argument from a function to another function
}
setMessages("Hello Bro", displayDOM); //switch btw function