// //change the card title to colors
// let Ctitle1=document.getElementsByClassName("card-title")[0]
// Ctitle1.style.color="red"
// let Ctitle2=document.getElementsByClassName("card-title")[1]
// Ctitle2.style.color="blue"
// let Ctitle4=document.getElementsByClassName("card-title")[2]
// Ctitle4.style.color="green"




//or
let Ctitles=document.querySelectorAll(".card-title")
Ctitles[0].style.color="red"
Ctitles[1].style.color="orange"
Ctitles[2].style.color="purple"
console.log(Ctitles)



let btn=document.querySelector(".button")
btn.style.color="red"
btn.style.background="white"

console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search"));
