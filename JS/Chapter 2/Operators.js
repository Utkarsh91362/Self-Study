console.log("Operators in JS")

let a=5;
let b=4;
console.log("\n")
console.log("Arthmetic Operator ")
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a / b = ", a/b);
console.log("a * b = ", a*b);
console.log("a ** b = ", a**b);
console.log("a % b = ", a%b);
console.log("a=",a);
console.log("a ++   "); //if a was printed here like a++ it will first print value of a then increment it by 1
a++;
console.log("a=",a);
console.log("a --   ",);
a--;
console.log(a)
console.log("++a",++a); //when when ++a was printed it will first increment the value of a by 1 then print the new value



console.log("\nAssignment Operators");
a=8;
b=5;

console.log("a=b, then value is ", a=b);
console.log("a+=b then value is ",a+=b);
console.log("a-=b then value is ",a-=b);
console.log("a/=b then value is ",a/=b);


console.log("\nComparison Operators");
let comp1=6;
let comp2="6";
console.log("Comp1 == comp2 is", comp1 == comp2); //true
console.log("Comp1 != comp2 is", comp1 != comp2); //false
console.log("Comp1 === comp2 is", comp1 === comp2); //even thought value is same it gives false as the datatype is not the same
console.log("Comp1 !== comp2 is", comp1 !== comp2); //true as either value is not same or datatype is not same
console.log("Comp1 > comp2 is", comp1 > comp2); 



console.log("\nLogical Operators");
let x=5;
let y=6;
console.log(x<y && x!=3) //both statement should be true
console.log(x<y || x==3)//either of the statement should be true

console.log(!false);
console.log(!true);

