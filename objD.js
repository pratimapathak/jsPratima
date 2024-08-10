//object destructuring
const obj = {
    name: 'pratima',
    id: 234,
    location:"babhnan"
}
const{name:a,location:l,id:i}=obj
console.log(a);
console.log(i);
console.log(l);
const objD={
    lastName:"pathak",
    firstName:"pratimaSameer"
}
const{lastName,firstName}=objD;//no need to use objD.firstName access variable with direct name
console.log(firstName);