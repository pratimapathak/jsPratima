let a=[1,2,3,4,5]
console.log(a.slice(1,4));//[ 2, 3, 4 ]
console.log(a.slice(2));//[3,4,5]
console.log(a.slice(-2));//[4,5]
console.log(a);//[ 1, 2, 3, 4, 5 ] not change he original array only provide copy of array
console.log(a.splice(1,2,"praima"));//[4,5]
console.log(a)//[ 1, 'praima', 4, 5 ] change the original array
console.log(Array.from("pratima"));//["p","r","a","t", "i","m","a"]
let arr1=200;
let arr2=200;
let arr3=200;
console.log(Array.of(arr1,arr2,arr3));//[200,200,200]
const arrOfA=[1,[2,3],[4,5,6,[7,8,9]]]
console.log(arrOfA.flat(Infinity))//[1, 2, 3, 4, 5,6, 7, 8, 9]