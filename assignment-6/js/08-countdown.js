/*
Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  

Ambiguous how he needs the timer. Whether to print on console/ show on browser.
Clarification required.
*/

function startTimer(seconds, display) {
  var countdown = setInterval(function() {
    display.textContent = seconds;
    if (--seconds < 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

window.onload = function() {
  let timeLeft = this.parseInt(
    window.prompt("Enter a number to start countdown!")
  );

  if (!Number.isNaN(timeLeft) && timeLeft > 0) {
    display = document.querySelector("#time");
    display.textContent = "Loading timer...";
    startTimer(timeLeft, display);
  } else {
    this.console.log("Error!");
    this.document.write("Invalid input! Refresh and try again.");
  }
};
