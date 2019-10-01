/*
    1. Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
    2. Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
    3. Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
    4. Display proper output    
    5. Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.

    Math.random()* (x) + 1 // gets random number from 1 to x (inclusive)
    Math.floor() // for rounding down to whole number
    */

let choices = ["heads", "tails"];
var userChoice = window.prompt("Pick Heads/Tails?").toLowerCase();

if (!choices.includes(userChoice)) {
  console.log("Error!");
  let errorMsg = "Invalid input. Please refresh and pick a valid choice.";
  document.write(errorMsg);
} else {
  var coinFlip = Math.floor(Math.random() * 100 + 1); // picks a random number between 1 and 100 (both inclusive)

  let threshold = 50; // 50/50 chance of heads/tails
  let coinToss = coinFlip > threshold ? choices[1] : choices[0];
  let didUserWin = coinToss == userChoice;

  let resultMsg = `The flip was ${coinToss} ${
    didUserWin ? "and" : "but"
  } you picked ${userChoice}...you ${didUserWin ? "win" : "lose"}!`;

  console.log(`${coinFlip} generated. Hence coinToss: ${coinToss}`);
  document.write(resultMsg);
}
