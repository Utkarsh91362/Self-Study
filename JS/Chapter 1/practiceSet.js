//Question 1
let a="Utkarsh"
let b=5
console.log(a+b)


//Question 2
console.log(typeof (a+b))

//Question 3
const c={ 
    name:"Utkarsh",
    section:1,
}
// ❌ You cannot reassign the entire object because `c` is declared with `const`
// c = 45; // TypeError: Assignment to constant variable.
// c={}  // TypeError: Assignment to constant variable.



//Question 4
c['Grade']="A+"
c['name']="Aman"
console.log(c)
// ✅ However, you *can* modify the properties inside the object:



//Question 5
const dictionary={
    Abate:"To reduce in intensity or amount. (e.g., The storm finally began to abate.)",
    Benevolent	:"Kind and generous; showing goodwill.",
    Candid	:"Honest and straightforward, even when it’s uncomfortable.",
    Diligent	:"Showing careful and persistent effort in work or duties.",
    Eloquent	:"Fluent and persuasive in speaking or writing.",
    Frugal	:"Careful about spending money; economical.",
    Hostile	:"Unfriendly or antagonistic in attitude or actions.",
    Innovate	:"To create something new or introduce new ideas or methods.",
    Lucid	:"Clear and easy to understand.",
    Resilient	:"Able to recover quickly from difficulties or setbacks.",
}
console.log(dictionary['Lucid'])