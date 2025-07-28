let arr=[0,1,2,3,4,5,6,7,8]
let n=arr.filter(x=>x!==0).reduce((x,y)=>x*y,1);
console.log(n);
