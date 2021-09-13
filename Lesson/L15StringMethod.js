var myName = "Jeremy Loh";

console.log(myName.length);
console.log(myName.charAt(2));
console.log(myName.indexOf("o"));
console.log(myName.trim()); //auto deleted the space infornt & back of string
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

/*var firstName = myName.slice(0,6); //to print string from index of 0 to 6*/
var firstName = myName.slice(0,myName.indexOf(" "));
var lastName = myName.slice(myName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);

myName = myName.charAt(0).toLowerCase() + myName.slice(1);  //chaining method
console.log(myName);

var street = "No. 1, Jln Malim";
var city = "75250 Melaka.";
var phoneNum = "011-123-456";

var address = street.concat(" ",city); //combine two string after a space

console.log(address);

phoneNum = phoneNum.replace("-","");
console.log(phoneNum);