let arr=[47, 3, 89, 12, 56, 23, 78, 5, 91, 14, 67, 30, 24, 39, 75, 88, 19, 60, 6, 33]
let n=arr.filter((value)=>{
    return value%10==0
})
console.log(n);


//cleaner method
let n2= arr.filter(value=> value % 10==0);
console.log(n2)



