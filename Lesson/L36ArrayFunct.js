function jump(){
    console.log("You jump");
}
function run(){
    console.log("You run");
}
function fly(){
    console.log("You fly");
}

let action = [];

action = [run, jump, fly];

for(let i=0; i<action.length; i++){ //loop method
    action[i]();
}

action.forEach(func => func());  // arrow method