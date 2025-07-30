let id1= document.getElementById("id1")
let id2= document.getElementById("id2")
let sp1=document.getElementById("sp1")


//.matches
console.log(id1.matches(".class"))//returns false
console.log(id1.matches(".box"))//returns true as id matches css selector


//.closeset
console.log(sp1.closest("#sp1"))
console.log(sp1.closest(".box1"))


//contains
console.log(id1.contains(sp1)); //true
console.log(sp1.contains(sp1));//true
console.log(sp1.contains(id1));//false id1 is parent and sp1 is child not the other way around
