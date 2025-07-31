let first=document.getElementById("first")
first.className=" text-dark yellow"
// first.className=" text-dark yellow"
// first.classList.remove("yellow")
// first.classList.add("red")
first.classList.toggle("yellow") //if it is there it will remove it , if not it will add it
first.classList.contains("yellow")//checks if a class if present in the element or not