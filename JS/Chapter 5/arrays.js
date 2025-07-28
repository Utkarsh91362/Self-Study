let marks_class_12=[91,82,21,63,84,"Not Present", false]
console.log(marks_class_12)
console.log(marks_class_12[3])
console.log(marks_class_12[9]) //is request exceeds range, undefined will be printed. Index 9 does not exist
console.log(`The length of array is ${marks_class_12.length}`)

marks_class_12[9]=34// adding value to an array
console.log(marks_class_12)
console.log(marks_class_12[8],marks_class_12[9])


marks_class_12[3]= 76 //change value of an array
console.log(marks_class_12)

console.log(typeof marks_class_12) //prints object