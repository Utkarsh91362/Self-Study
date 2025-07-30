let b=document.body
console.log("First child of b is:", b.firstChild);
console.log("First child of b is:", b.firstElementChild);
console.log("Next Element of b is:",b.firstElementChild.nextElementSibling)


const changeBgcolor=(value)=>{
    document.body.firstElementChild.style.background=value
}