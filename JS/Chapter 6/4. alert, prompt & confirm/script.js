alert("Script is working")
let a= prompt("Enter a","23") //here "23" is an optional default value
a=Number(a)

alert(`You entered a of type ${typeof a}`)
let write=confirm("Do you want to write it on the page?")
if(write){
    document.write(a)
}
else{
    document.write("Please allow e to write")
}