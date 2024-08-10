const id=Symbol("12")
const userid=Symbol("12")
console.log(id==userid)// false
//memory--- stack and heap
//primitive type data store in stack
// non-primitive or reference type data use heap memory
let a = "pratima";
let b = a;
b="pathak"
console.log(a)// pratima
console.log(b)//patahk
let user={
    name:"pratima",
    pass:123
}
let user1=user;
user1.name="mayank";
console.log(user);
console.log(user1)