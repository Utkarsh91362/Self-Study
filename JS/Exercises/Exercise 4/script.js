

setInterval(function () {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let hours=document.getElementsByClassName("hours")[0]
    let minutes=document.getElementsByClassName("minutes")[0]
    let seconds=document.getElementsByClassName("seconds")[0]
    hours.innerHTML=h
    minutes.innerHTML=m
    seconds.innerHTML=s
    console.log(h, m, s,d)
},1000)