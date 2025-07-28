let min = 0
let max = 100
let computer_guess = Math.floor(Math.random() * (max - min + 1)) + min;
let counter = 0;
let guess;
let maxtries=8
console.log(computer_guess);
do {
    if(maxtries>counter ){
        guess = Number(prompt("Guess a number"))
        counter++;
    if (computer_guess > guess) {
        console.log(`Try higher ${maxtries-counter} tries left`)
        alert(`Try higher ${maxtries-counter} tries left`)

    } else if (computer_guess < guess) {
        console.log(`Try lower ${maxtries-counter} tries left`);
        alert(`Try lower ${maxtries-counter} tries left`)

    }
    else {
        console.log(`You guessed it right, it took you ${counter} tries`);

    }}else{
        console.log("game over")
        alert("Game over! You ran out of tries.");
        break;
    }
} while (guess !== computer_guess)