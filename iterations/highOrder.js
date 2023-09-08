//for of 
const arr=[1,2,3,4,5];
for(const num of arr){
    console.log(num);
}
const greetings="Hello world";
for(const great of greetings){
    console.log(`Each is a ${great}`);
}
// map
const map=new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");
map.set('Ch',"China");
// console.log(map);
for(const [key,value] of map){
    // console.log(key,':-',value);
}
const myObject={
    game1:'nfs',
    game2:'spiderman'
}
// for(const [kay,value] of myObject){
//     console.log(key,':-',value);
// }
