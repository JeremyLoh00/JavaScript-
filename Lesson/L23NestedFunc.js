function login(){

    let name = "Jeremy";
    let msg = 8;

    function displayName(){
        console.log("Welcome",name);
    }
    function displayMsg(){
        console.log("You have",msg,"messages!");
    }

    displayName();
    displayMsg();
}

login();