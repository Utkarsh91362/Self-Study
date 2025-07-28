let num=[12,3,34,7]
console.log(num)
//toSrting()
let b= num.toString()
console.log(b, typeof b)


//join()
let c= num.join("--")
console.log(c, typeof c)


//pop()
let r=num.pop()
console.log(num,`popped element is ${r}`)

//push()
let s=num.push(56)
console.log(num, `new length is ${s}`)

//shift() removes element form the start of an array and returns removed value
let t=num.shift()
console.log(`the removed value is ${t}`, `array: ${num}`)

//unshift() add an element to the start of an array and returns new length
let u=num.unshift(78)
console.log(`New length of the array ${u}`,`array: ${num}`)