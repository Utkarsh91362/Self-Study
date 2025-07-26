function Avg(x,y){
    console.log("Done")
    return Math.round(1 + (x+y)/2);
}
const sum= (x,y) =>{
    return x+y;
}

const greet=() =>{
    console.log("Good morning")
}
let a=1;
let b=4;
let c=12;

console.log("Average of a and b",Avg(b,c));
console.log("Average of a and b",Avg(a,b));
console.log(sum(5,5))
greet();