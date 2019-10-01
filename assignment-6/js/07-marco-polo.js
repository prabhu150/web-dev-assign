/*
Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo!" instead of the number. For numbers which are multiples of both 3 and 5 print "Marco! Polo!". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/

let start = 1, end = 100;

for(var i = start; i <= end; i++)
{
    let result 

    if (i% 15 == 0)
    {
    result = "Marco!Polo!"    
    }
    else if (i%5 == 0)
    {
    result = "Polo!"
    }
    else if (i%3 == 0)
    {
    result = "Marco!"
    }
    else
    {result = i};

    console.log(result + '\n')
    document.write(result + '\n') // unclear whether to print on console/browser.

}