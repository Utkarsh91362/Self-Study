let num1=[1,2,3,4,5,6,7,8,9]
let num2=[10,11,12,13,14]
let num3=[211,10,32,2,64,6,7,8,9]
console.log("length of array",num1.length)

//delete
delete num1[1] //delets the element but its space is left empty so the length of array doesn't change at all
console.log(num1)
console.log("length of array after usig delete ",num1.length) 

//concat
let num= num1.concat(num2,num3)
console.log(num)


//sort
let compare=(a,b)=>{ //using this function we are saying if the result is negative no swappng of values, if the result is positive the values swap with each other 
    return a-b 
}
num3.sort(compare)
console.log(num3)




//reverse
num3.reverse()
console.log(num3)


//splice
let v=num3.splice(2,3, 1001,1002,1003) //splice(starting index, no. of elements to remove,elements to add)
console.log(num3, `values deleted ${v}`) // returns deleted items and modifies source arrays


//slice()
let num4=num3.slice(2)
console.log(num4)
console.log(num4.slice(1,3))
