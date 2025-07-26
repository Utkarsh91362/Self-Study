//To run the file use index.html
let age= prompt("Your age");
age=Number.parseInt(age);

if(age>0 && age<10){
    alert("Not eligible")
}
else if(age>=10 && age<=20){
    alert("You fall under the bracket of 10-20")
}
else if(age>20){
    alert("You are too old")
}else{
    alert("invalid age")
}