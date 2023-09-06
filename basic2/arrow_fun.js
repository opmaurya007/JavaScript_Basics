const user={
    username:"op",price:399,
    welComeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welComeMessage();
// user.username="sam";
// user.welComeMessage();
console.log(this);
// function chai(){
//     let username="opmaurya"
// console.log(this.username);
// }
// chai();
//  const chai =function (){
//     let username="opmaurya"
// console.log(this.username);
// }
// chai();
// const chai =()=>{
//     let username="opmaurya"
// console.log(this.username);
// }
// chai();
// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

// const addTwo=(num1,num2)=>num1+num2
// console.log(addTwo(3,4));
const addTwo=(num1,num2)=>({username:"opmaurya"})
console.log(addTwo());