// falsi values

// false,0,-0,bigInt,0n,"",null,undefened,  NAN
// truthy values
//"0","false"," ",[],{},function(){},


// const emptyObj={};
// if (Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }

//NUllish coalescing Operator (??): null undefined
let val1;
// val1 = 5??10
// val1 =null??10
// val1=undefined??20
console.log(val1);

//Ternary Operator
//condition ? true : false

const iceTeaPrice=100;
iceTeaPrice>=80?console.log("less than 80"): console.log("more than 80");