let b1= function(){
    alert("Pressed button 1")
}
let b2= function(){
    alert("Pressed button 2")
}
let b3= function(){
    alert("Pressed button 3")
}
let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')
let btn3=document.getElementById('btn3')



btn1.addEventListener('click',b1)
btn2.addEventListener('click',b2)
btn3.addEventListener('click',b3)