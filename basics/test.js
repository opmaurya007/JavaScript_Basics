// console.log("opmaurya");
const accountId = 144553
let accountEmail = "opmaurya"
var accountPassword = "12345"
accountCity = "Pune"
// accountId = 2
console.log(accountId);
//++++++++++++
//stack(Primitive),Heap (Non-primitive)

//date and time
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); 
// console.log(myDate.getDay);
//  console.log(myDate.setFullYear);
// console.log(myDate.toLocaleString());
//Array

// const myArray = [1,2,3,4];
// console.log(myArray[2]);
//object literals
const JsUser = {
    name: "op",
    "full name" : "op maurya",
    age : 23,
    course : "cse",
    email : "opmaurya@gmail.com"
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());