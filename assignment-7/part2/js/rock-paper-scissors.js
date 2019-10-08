let userInput = window.prompt("Welcome to Rock, Paper, Scissors. Please pick one!")

playRockPaperScissors(userInput)

function playRockPaperScissors(userInput) {
  var output,
    userChoice = userInput.toLowerCase()

  let validChoices = ["rock", "paper", "scissors"],
    outcomes = ["destroys", "covers", "cuts"]

  if (validChoices.includes(userChoice)) {
    let maxIndex = validChoices.length - 1,
      winner,
      loser,
      message

    let winningRules = { rock: "scissors", paper: "rock", scissors: "paper" }

    var computerChoice = validChoices[getRandomNumber(maxIndex)]

    while (computerChoice == userChoice)
      computerChoice = validChoices[getRandomNumber(maxIndex)]
    // avoid ties altogether. keep picking randomly until you win/lose

    let didUserWin = winningRules[userChoice] == computerChoice
    /*
        Since a tie is not possible, user will win only if the computer picks
        a losing choice. i.e winningRules["rock"] == "scissors"

        Debug mode:
        console.log("Random number picked:",validChoices.indexOf(computerChoice))
        */

    output = `Your choice: ${toTitleCase(userChoice)} Computer: ${toTitleCase(computerChoice)}\n`

    if (didUserWin) {
      winner = userChoice
      loser = computerChoice
      message = "You Win!"
    } else {
      winner = computerChoice
      loser = userChoice
      message = "You Lose!"
    }

    output += `${toTitleCase(winner)} ${
      outcomes[validChoices.indexOf(winner)]
    } ${toTitleCase(loser)} \n ${message}`
  } else {
    output = `Entered Input:${userChoice} is invalid. Please pick a valid choice!`
  }

  console.log(output)
}

function getRandomNumber(max) {
  return Math.round(Math.random() * max)
}

function toTitleCase(word){
    return word.replace(word[0],word[0].toUpperCase())
}