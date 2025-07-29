console.time("p1")
console.log("log");
console.info("info")
console.warn("warning")
console.error("error")
console.assert("error"!= false)
console.assert("error"== false)
console.table(console)
console.timeEnd("p1")

console.time("forLoop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forLoop")

console.time("WhileLoop")
let a=0
while(a <5){
    a++
    console.log(233)
}
console.timeEnd("WhileLoop")
