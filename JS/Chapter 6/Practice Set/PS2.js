
let run_again = true;

const canDrive = ((age) => age >= 18);
let age;
while (run_again) {
    age = Number(prompt("Enter your age"))
    
    if (canDrive(age)) {
        alert("You can drive")
    }
    else {
        alert("You cannot Drive")
    }
    run_again = confirm("do you type again??")
}
document.write(age)