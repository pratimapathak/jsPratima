let x=200;
if(x>100) console.log("correct"),console.log("very good");//correct , very good
const obj={}
if(Object.keys(obj).length===0){
    console.log("empty object");
}// empty object

//nullish coeascing operatorspecially for null and undefined
let val
val=20??10
console.log(val);// 20
val=null??10;
console.log(val);// 10
val=undefined??5
console.log(val);//5

const email="admin@gmail.com"
if(email){
    console.log(`email is valid: ${email}`);
}

