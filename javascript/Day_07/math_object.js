// Math Object

let num = 2.6
let num1 = 5
// Math.floor():

// Math.floor() rounds down the number to the nearest integer that is less than or equal to the original number.
// It always returns an integer that is less than or equal to the original number.
// It also works well for both positive and negative numbers.

console.log(Math.floor(num));

// Math.trunc()

// Math.trunc() simply removes the decimal part of a number and returns the integer part.
// It doesn't round the number; it just truncates the decimal portion, effectively cutting it off.
// It always returns a number with the same sign as the original number.
// It works well for positive and negative numbers.

console.log(Math.trunc(num));


// It +1 if there is any decimal value
num = 2.1
console.log(Math.ceil(num));
// return the random value
console.log(Math.trunc(Math.random()*10));