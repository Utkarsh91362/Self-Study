let x= function(a){
    console.log(a)
    console.log(a.target);
    console.log(a.type);
    console.log(a.currentTarget);
    
    //ClientX and ClientY are used to check the position where the button was clicked
    console.log(a.clientX);
    console.log(a.clientY);
    
    
}
let y= function(a){
    alert("Event 2!")
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a=Number(prompt("Enter a number"))

if(a==2){
    btn.removeEventListener('click',x)
}else{
    btn.removeEventListener('click',y)
}