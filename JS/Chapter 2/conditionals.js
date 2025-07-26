//To run the file use index.html

let a= prompt("Your age: ");

console.log(typeof a)
a=Number.parseInt(a) //converting the string to a number
console.log(typeof a)
if(a>0 && a < 19){
    
    alert(`You are a teenager, try again after ${19 - a } years`)
    
}else if (a>=19) {
    alert("You are an adult")
}
else{
    alert("This is not a valid age")
}

console.log("You can",(a<18?"not Drive" :"Drive"))