const arr=["pratia", "ke","pawan"]
for (const key in arr) {
    console.log(arr[key]);
}
const greet="hello pratima"
for (const i of greet) {
   console.log(i); 
}
const crr=[{
    name:"prama",
    age:27,
},
{
    vill:"babhnan",
    dist:"basti"
}]
crr.forEach(key => {
    console.log(key.dist);
});
const map= new Map();
map.set("in","india");
map.set("usa","america");
map.set("ln", "londo")
for (const [key,val] of map) {
   console.log(`${key}: ${val}`); 
}
// foreach loop
let EachFor=["pratima","sameer","pawan"]
const a= EachFor.forEach(items=> {
    console.log(items);
});
console.log(a);// undefined "for each does not return anything"
