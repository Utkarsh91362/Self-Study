//Question 1

//method 1
// let fe1=document.body.firstElementChild.firstElementChild.firstElementChild
// console.log(fe1.style.color="red");

//method 2
// let fe1=document.getElementsByTagName("ul")[0].firstElementChild.style.color="red"




// Question 2
//In view page source we don't see tbody but then we inspect the page the tbody appears because webpage auto corrects the structure whereas page source is raw data we write



//Question 3
let fe=document.getElementsByClassName("Q2")[0].firstElementChild.style.color="green"
let le=document.getElementsByClassName("Q2")[0].lastElementChild.style.color="green"



//Question 4
let li=Array.from( document.getElementsByTagName("li"))
li.forEach((element) =>{element.style.background="cyan"})


//Question 5
//Which of the following is used to look for the farthest ancestor that matches a cc selector, matches/closest/contains
//Answer is none of these is usable for looking for farthest ancestor