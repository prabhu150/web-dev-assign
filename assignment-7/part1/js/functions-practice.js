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
function percentOf(firstNumber, secondNumber) {
  let output,
    percent = (firstNumber / secondNumber) * 100;

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber))
    output = errorMsg;
  else output = `${firstNumber} is ${percent}% of ${secondNumber}.`;

  console.log(output);
  return percent;
}
//STEP 4

function findModulus(firstNumber, secondNumber) {
  let output,
    modulus = secondNumber % firstNumber;

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber))
    output = errorMsg;
  else
    output = `${modulus} is the modulus of ${firstNumber} and ${secondNumber}.`;

  console.log(output);
  return modulus;
}

//STEP 5
/* 
1. should I write a seperate function to take the variable number of parameters or should I do that within the function itself? 

2. are 2.3, 4.5 numbers? By numbers, do we mean integers or any non alphabetic characters?

*/
function sumOfInput(...input) {
  let numbers = input.filter(value => Number.isInteger(value));

  if (numbers.length > 0)
    result = numbers.reduce((previousVal, currentVal) => {
      return previousVal + currentVal;
    });
  else result = 0;

  /*
    Using raw loops if required 
    
    var size = input.length - 1, result = 0
    while(size > -1)
    {
      if(Number.isInteger(input[size]))
        result += input[size]
      size--
    }
    */
  console.log(input);
  console.log(`${result} is the sum for all integer arguments.`);
  return result;
}
