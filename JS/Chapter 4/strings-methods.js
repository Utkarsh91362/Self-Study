let name= "Utkarsh Kaushik"
console.log(name)
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(3,7))

console.log(name.replace("sh","x"))
let age = 22
console.log(name.concat(` is ${age} years old`))
let language="    English   "
console.log(language)
console.log(language.trim())

for (let letters in name){
    console.log(name[letters])
}