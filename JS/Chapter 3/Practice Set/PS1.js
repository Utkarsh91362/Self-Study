const obj={
    Utkrash:98,
    Rohan: 76,
    Rajat:80,
    Saksham:34
}
for(let i=0; i<Object.keys(obj).length;i++){
    console.log("The marks of "+ Object.keys(obj)[i]+" are "+ obj[Object.keys(obj)[i]])
}