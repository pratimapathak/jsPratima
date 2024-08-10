
const obj={
    name:"pratima",
    location:"babhnan"
}
function printUser(anyobject){
    return `my name ${anyobject.name} and ${anyobject.location}`
}
printUser(obj)
//array with function
const newArr=[500,400,300]
function arrFn(a){
return a[2]
}
console.log(arrFn(newArr));
