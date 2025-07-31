// let a=setTimeout(function(){
//     alert("I am  inside setTimeout")
// }, 7000)

// let b=prompt("Do you want to run the set timeout?")
// if (b=="no"){
//     clearTimeout(a)
    
// }
// console.log(a);

// alert("Hello")
// const sum=(a,b)=>{a+b 
//     console.log(a+b)}

// setTimeout(sum,5000,1,2)


// setInterval(function(){
//     alert("setInterval")
// },4000)



// const sum=()=>{
//     let n1=Number(prompt("Enter n1"))
//     let n2=Number(prompt("Enter n2"))
//     let res=n1+n2;
//     console.log(res)
// }

// setInterval(sum,6000)



function greet(name, mood){
    console.log(`Hello! ${name}, You're feeling ${mood} today `)
}
setInterval(greet, 3000, "Utkarsh", "awesome")