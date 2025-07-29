let age= Number(prompt("Enter your age"))
const canDrive=((age)=>age>=18);
if(canDrive(age)){
    alert("You can drive")
}
else{
    alert("You cannot Drive")
}