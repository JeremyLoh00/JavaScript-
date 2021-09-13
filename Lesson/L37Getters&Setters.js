let user = {

    firstName : "",
    lastName : "",

    set first(value){
        this.firstName = value.toUpperCase();
    },
    set last(value){
        this.lastName = value.toUpperCase();
    },
    get fullName(){
        return this.firstName  + " " + this.lastName;
    }
};

user.first = "Jeremy";
user.last = "Loh";

console.log(user.fullName);
