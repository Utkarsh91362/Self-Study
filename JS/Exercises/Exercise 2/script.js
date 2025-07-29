let choices = ["Rock", "Paper", "Scissors"]


function playGame() {
    let random_choice = Math.floor(Math.random() * choices.length);
    let computer_choice = choices[random_choice];
    console.log(`Computer chose: ${computer_choice}`)
    const toWin = {
        paper: "rock",
        rock: "scissors",
        scissors: "paper"
    }
    let player_choice = prompt("Choose one Rock/Paper/Scissors")
    console.log(`Player chose: ${player_choice}`)
    if (player_choice === null) {
        return "cancelled";  // signal the game loop to break
    }

    player_choice = player_choice.toLowerCase()
    computer_choice = computer_choice.toLowerCase()

    if (!["rock", "paper", "scissors"].includes(player_choice)) {
        console.log("Invalid choice!")
        alert("Invalid choice! Please enter Rock, Paper, or Scissors.")
        return;
    }
    else if (player_choice == computer_choice) {
        console.log("its a tie")
        alert("its a tie")
    } else if (toWin[player_choice] == computer_choice) {
        console.log("You win!")
        alert("You Won")

    } else {
        console.log("Computer won");
        alert("Computer Won!")

    }
}


let playAgain = true;
while (playAgain) {
    const result=playGame()
    if (result === "cancelled") break;
    playAgain = confirm("Wanna Play again?")
}
alert("Game Over!")