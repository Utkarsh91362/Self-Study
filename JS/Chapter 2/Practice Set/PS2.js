let a= Number(prompt("Enter 1st number"))
let b= Number(prompt("Enter 2nd number"))
let operation= prompt("Choose the Arithmatic operator +,-,*,/,**,%")
switch(operation){
    case "+":
        result=a+b;
        break;
    case "-":
        result=a-b;
        break;
    case "*":
        result=a*b;
        break;
    case "/":
        result = b !== 0 ? a / b : "Cannot divide by zero";
        break;
    case "**":
        result=a**b;
        break;
    case "%":
        result=a%b;
        break;
    default:
        result="Invalid Operator";
}
alert("result: "+result)