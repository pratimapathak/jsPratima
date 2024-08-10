function thisFn(){
    console.log(this)
}
thisFn()//lot of method

console.log(this);//o/p {}
const thisArr=()=>{
const user ="pratima"
console.log(this.user);
}
thisArr()/// we cant use the this in normal as well as arrow function

const one=(num)=>{
    return num+1
}

console.log(one(4));
const two=(num1)=>num1+2;
const three=(num1)=>(num1+3);
console.log(two(4));
console.log(three(7));