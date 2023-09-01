// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id ="123abc"; 
tinderUser.name="op";

// console.log(tinderUser);
// console.log(tinderUser.name);
const regularUser = {
    email:"opmau@g",
    fullName:{
        userFullName:{
            firstName:"op",
        lName:"maurya"
        }
    } 
}
// console.log(regularUser.fullName.userFullName);

const obj1 = {1:"a",2:"b"};
const obj2 ={3:"c",4:"d"};
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[{
    id:1,name:"op"
},
{
    id:2,name:"pnk"
},
{
    id:3,name:"swapnil"
},
{
    id:4,
    name:"jag"
}]
users[1].email
// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));