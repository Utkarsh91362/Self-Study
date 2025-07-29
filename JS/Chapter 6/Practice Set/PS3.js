
let run_again = true;

const canDrive = ((age) => age >= 18);

while (run_again) {
    let age = Number(prompt("Enter your age"))
    if(age<0){
        console.error("Please enter a valid age");
        break;
    }
    if (canDrive(age)) {
        alert("You can drive")
    }
    else {
        alert("You cannot Drive")
    }
    run_again = confirm("do you type again??")
}