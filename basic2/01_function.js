function sayMyName(){
    console.log("O");
    console.log("P");
    console.log("M");
    console.log("A");
    console.log("U");
    console.log("R");
}
// sayMyName();
// function addtwoNumbers(num1,num2){
//     console.log(    num1+num2
//         );
// }
function addtwoNumbers(num1,num2){
    // let result=num1+num2
    return num1+num2;
}
const result=addtwoNumbers(3,4);
// console.log("Result:",result);
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
const res = loginUserMessage("opmaurya");
console.log(res);