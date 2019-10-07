/*
    1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
    2. Create a do while loop.
    3. Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
    4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
    5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

*/
var coinFlip, result
do {
    coinFlip = Math.round(Math.random());
    result = coinFlip == 0 ? "Heads" : "Tails";
    console.log(result)
}while(result == "Heads");
document.write("Results printed in console.")