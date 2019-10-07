//STEP 1

let errorMsg = `Invalid input! Please refresh and send proper input`;

function halfNumber(someNumber) {
  let output,
    halfNum = someNumber / 2;

  if (Number.isNaN(someNumber)) output = errorMsg;
  else output = `Half of ${someNumber} is ${halfNum}.`;

  console.log(output);
  return halfNum;
}

//STEP 2

function squareNumber(someNumber) {
  let output,
    square = someNumber * someNumber;

  if (Number.isNaN(someNumber)) output = errorMsg;
  else output = `The result of squaring the number ${someNumber} is ${square}.`;

  console.log(output);
  return square;
}

//STEP 3
function percentOf(firstNumber, secondNumber)
{
    let output,
    percent = firstNumber / secondNumber * 100;

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) output = errorMsg;
  else output = `${firstNumber} is ${percent}% of ${secondNumber}.`;

  console.log(output);
  return percent;
}
//STEP 4

function findModulus(firstNumber,secondNumber)
{
    let output,
    modulus = secondNumber % firstNumber ;

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) output = errorMsg;
  else output = `${modulus} is the modulus of ${firstNumber} and ${secondNumber}.`;

  console.log(output);
  return modulus;   
}

//STEP 5
/* should I write a seperate function to take the variable number of parameters or should I do that within the function itself? */
function sumOfInput(...input)
{

    let numbers = input.filter(value => Number.isInteger(value))
    
    if(numbers.length > 0)
        result = numbers.reduce((previousVal,currentVal) => {return previousVal + currentVal;});
    else
        result = 0;

    console.log(input)
    console.log(`${result} is the sum for all integer arguments.`)
    return result;

}