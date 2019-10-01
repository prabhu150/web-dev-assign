/*
Create an application that accepts two integers within two separate prompts. 
Then, display only the larger of the two within the browser window. 
Don’t forget to handle the fact that the two could be equal.
*/

let first = parseInt(window.prompt("Enter first number"));
let second = parseInt(window.prompt("Enter second number"));
let output;

if (Number.isNaN(first) || Number.isNaN(second))
{
  output = "Invalid input. Please refresh and enter a valid choice."
}
else if (first == second) {
  output = `Both values are equal! Given values: ${first},${second}`;
} else {
  let larger = first > second ? first : second;
  output = larger + " is the larger value!";
}
document.write(output);
console.log(output);
