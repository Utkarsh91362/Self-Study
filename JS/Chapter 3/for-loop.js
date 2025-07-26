//program to add first n natural numbers
let sum =0;
let n= Number(prompt("Enter the nth natural number"))

for (let i =0; i<=n; i++){
    sum+=i
    console.log(sum)
}
console.log("sum of first "+ n+ " natural numbers is "+sum)



// fibonacci series
let x=Number(prompt("Enter the number till you want fibonacci series"))
let a=0;
let b=1;
console.log("fibonacci series till "+n)
console.log(a);
console.log(b)

for (let i=2 ; i<=n; i++){
    let next=a+b;
    console.log(next)
    a=b;
    b=next;
}