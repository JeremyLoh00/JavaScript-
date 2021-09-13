var human = {

    name : "Jeremy",    //use colon instaed of equal
    age : 21,           //use comma instead of semicolon

    eat : function(){
        console.log("I like to eat durian");
   },
   drinks : function(){
       console.log("Drink at least 8 glass of water");
   },
   sleep : function(){
       console.log("Sleep 8 hours a day");
   }
};
/*human.name (dot notation)
  human['name'] (bracket notation)*/
console.log(human.name);
console.log(human.age);
human.eat();
human.drinks();
human.sleep();