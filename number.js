let score = 400.453453;
console.log(score);//400
console.log(typeof score);//number
let b = new Number(400);
console.log(b)// [Number:400]
console.log(typeof b);//object

console.log(score.toFixed(2))// 400.45
score = 1000000
console.log(score.toLocaleString("en-IN"))//10,00,000

let pre=454.768;
console.log(pre.toPrecision(3))//455

//math
console.log(Math.abs(-2))//2
console.log(Math.round(2.56))//3
console.log(Math.ceil(2.56))//3 top value consider
console.log(Math.floor(2.56))// 2 below value consider
console.log(Math.sqrt(4))// 2


