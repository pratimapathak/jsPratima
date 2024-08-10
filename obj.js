let mySym=Symbol("hello dear");
const objNew={
    name:"praima",
    id:123,
    email:"admin@gmail.com",
    pas:"pratima@23",
    [mySym]:"xyz"
}
console.log(objNew.id);
console.log(objNew["email"]);
// Object.freeze(objNew)
objNew.email="pratima@gmail.com";

console.log(objNew.email);
console.log(typeof (objNew[mySym]));
objNew.funOne=function(){
    console.log(`hello s user ${this.name}`)
}
console.log(objNew.funOne());
