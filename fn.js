function myFun() {
    console.log("pratima")
    console.log("pushpa")
    console.log("mayank")
}
myFun()
//
function add(a, b) {
    return a + b
}
let b = add(8, 9);
console.log(b);//17
b = add()
console.log(b);//nan
function userFun(user) {
    if (!user){
                return `no name`
    }
return`user name is ${user}`
}
const user = userFun()
console.log(user);//undefined
console.log(userFun("pratima pathak"));//undefined







