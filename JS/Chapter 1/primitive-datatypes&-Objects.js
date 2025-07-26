//primitive data types nn bb ss u
let a= null; //It's not an object, even though typeof null says "object". This is officially recognized as a bug in the ECMAScript spec, but it's too late to change now because it would break too much code.

let b=93;
let c=true;
let d=BigInt("91362")+BigInt("40");
let e="Utkarsh";
let f= Symbol("This is a symbol");
let g=undefined
console.log(a,typeof a,"\n",b,typeof b,"\n",c,typeof c,"\n",d,typeof d,"\n",e,typeof e,"\n",f,typeof f,"\n",g, typeof g)


//Non-Primitive Datatype---Objects in JS
const item={
    "Utkarsh":true,
    "Arnim":false,
    "Rajat":85,
    "Saksham":undefined

}
console.log(item["Rajat"])