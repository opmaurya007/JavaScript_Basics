//Object literal
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