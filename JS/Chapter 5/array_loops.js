let num =[3,54,1,2,4]
for (let i=0; i<num.length; i++){
    // console.log(num[i])
}
console.log("\n")

//forEach loop
console.log("forEach")
num.forEach((element)=>{
    console.log(element*element)
})


// Array.from
console.log("\nArray.from")
let name="Utkarsh"
let arr =Array.from(name)
console.log(arr)


//for...of
console.log("\nfor...of")
for(let item of num){
    console.log(item)
}



//for..in
console.log("\nfor..in")
for(let i in num){
    console.log(num[i])
}
