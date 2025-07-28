//we use map when we want to make a new array and forEach is used to perform functions on the same array
const arr=[45,23,21]
let a= arr.map((value,index, array)=>{
    console.log(value, index, array);
    return value+index
})
// console.log(a);


//filter method
const arr2=[45,23,21,0,3,5]
let a2=arr2.filter((value)=>{
    return value<10
})
// console.log(a2);



//reduce
let arr3=[1,2,3,5,2,1]
let a3=arr3.reduce((a,b)=>{
    return a+b
})
console.log(a3);
