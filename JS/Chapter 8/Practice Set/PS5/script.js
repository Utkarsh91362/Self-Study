setInterval(async function () {
    const bulb=document.querySelector("#bulb")
    bulb.classList.toggle("bulb")
    if(bulb.classList.contains("bulb")){
    document.body.style.background="#f5c827ff"
    }else{
        document.body.style.background="black"
    }
    
},500)