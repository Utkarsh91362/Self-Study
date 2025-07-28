let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a;
do {
    a = Number(prompt("Enter the number"))
    if (a !== 0) {
        arr.push(a)
        console.log(arr)
    }else{
        console.log("Done")
        console.log(arr)

    }
} while (a != 0)