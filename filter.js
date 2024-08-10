let a = [2, 3, 4, 5, 7, 9, 24]
const data = a.filter(num => num / 2)
console.log(data);
let numbers = [2, 4, 6, 8, 9, 1, 10]
const myNums = numbers.map((nums) => {
    return nums + 10
})
console.log(myNums);
// chaining
const chain = [1, 2, 3, 4, 5, 6, 7, 8]
const mychain = chain.map((ns) => ns * 10)
                     .map((ns) => ns + 1).filter((ns)=>ns>50)

console.log(mychain);

// reduce method
const red=[2,4,6,8]
const myRed=red.reduce((acc,curr)=>(acc+curr),2)
console.log(`${acc} and ${curr}`);
console.log(myRed);