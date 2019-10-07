/*
Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. 
If the number is 100, it should count down from 100 to 0 and so on.  
Ambiguous whether a regular timer is required or a simple printout from n to 0. Preparing for both.
*/

/* assuming the question only asked to print digits x to 0 in reverse order */

function simpleForLoopCountDown(timeLeft,display)
{
  var digits = new Array(timeLeft + 1).fill(0).map((value,index) => {return timeLeft - index;})
  /* above statement creates an array with the required size, fills it with zeroes and later 
  sets it with the items we need to print */

  display.innerHTML += "<br /><br /><br />"
  display.innerHTML += "Simple countdown: <br /> "

  for (const digit of digits)
    display.innerHTML += digit + '<br />';
}


/* Assuming the question asked for a timer from x seconds to 0. */
function startTimer(seconds, display) {
  var countdown = setInterval(function() {
    display.textContent = "Timer Countdown: " + seconds;
    console.log(seconds)
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
    simpleForLoopCountDown(timeLeft,document.querySelector("#countdown"));
  } else {
    this.console.log("Error!");
    this.document.write("Invalid input! Refresh and try again.");
  }
};
