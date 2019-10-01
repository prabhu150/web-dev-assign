/*
Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
Sample Output:
"0 is even" 
"1 is odd" 
"2 is even"
*/

let start = 0, end = 15

for(var i = start; i <= end; i++)
{
let result = i&1 ? "odd" : "even";
console.log(`${i} is ${result}`)
}