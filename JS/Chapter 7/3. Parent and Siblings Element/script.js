let b=document.documentElement
console.log(b.parentElement)//returns null
console.log(b.parentNode)//returns HTMLdocument




console.log(document.body.firstChild);
let a=document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.nextSibling)
console.log(a.firstChild.nextSibling) //returns <div class="second">

