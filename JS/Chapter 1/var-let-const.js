console.log("'var' vs 'let' vs 'const'")
var a=45;
let b= "Utkarsh"
// let b= "p" cannot be redeclared
const author="Utkarsh"
// let author=5 already been declared
// author="Yash" throws error ssignment to constant variable. as const variable's value cannor be cahnged
let c= null
console.log(b)
console.log(c)
{
    let b='this'
    console.log(b)
}
console.log(b)