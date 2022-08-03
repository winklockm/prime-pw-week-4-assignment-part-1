console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  let greeting = 'Hello, ' + name + '!';
  return greeting;
}
// Remember to call the function to test
console.log('Test - should say "Hello, Maggie!"', helloName('Maggie'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber) {
  console.log('add', firstNumber, 'and', secondNumber);
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log('Test - should say "30"', addNumbers(10, 20));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  console.log('multiply', firstNumber, 'and', secondNumber, 'and', thirdNumber);
  let answer = firstNumber*secondNumber*thirdNumber;
  return answer;
}
console.log('Test - should say "24"', multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length > 0){
    return array[array.length-1]; //is this acceptable or is it best to create a variable like let lastItem = array[array.length] and then return lastItem?
  }
  else{
    return 'undefined';
  }
}
console.log('Test - should say "11"', getLast([7, 9, 45, 11]));
console.log('Test - should say "undefined"', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(item of array){
    if(item === value){
      console.log('find ', value, ' in ', array)
      return true;
    }
  }
  console.log('find ', value, ' in ', array);
  return false;
}
console.log('Test - should say "true"', find(7, [4, 7, 9]));
console.log('Test - should say "false"', find(11, [4, 7, 9]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let first = string.charAt(0);
  if(letter === first){
    return true;
  }
  else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for(item of array){
    sum += item;
  }
  return sum;
}
console.log('Test - should say "12"', sumAll([1, 1, 10]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let newArray = [];

function positiveArray(inputArray) {   
  for(number of inputArray){
    console.log('number is: ',number);
    if(number > 0){
      console.log('add to newArray');
      newArray.push(number);
    }
    else{
      console.log('do not add');
    }
  }
  return newArray;
}

console.log(positiveArray([0, 0, -5,]));
console.log(positiveArray([7, 7, 0, -5,]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Function for finding the perimeter of a rectangle

function perim(length, width) {
  let perimeter = ((length + width)*2);
  console.log('Perimeter of rectangle with length', length, 'and width', width, ':');
  return perimeter;
}
console.log(perim(6, 7));
console.log(perim(20, 10));
console.log(perim(2, 9));