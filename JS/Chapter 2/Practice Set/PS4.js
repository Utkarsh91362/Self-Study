let n= Number(prompt("Enter a number"))
if(n%2 == 0 && n%3 == 0){
    alert("number is divisible by 2 and 3")
}else if(n%2 ==0 || n%3 ==0){
    alert("The number is either divisible by 2 or 3")
    if(n%2 ==0 && n%3 !=0){
        alert("the number is divisible by 2 but not by 3")
    }
    else{
        alert("the number is divisible by 3 but not 2")
    }
}
else{
    alert("number is not divisible by 2 and 3 ")
}