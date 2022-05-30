//Create a function that determines whether a number is Oddish or Evenish
//Oddish is the number is odd and has an odd number of digits
//Evenish is the number is even and has an even number of digits
//Return the string "Oddish" or "Evenish"  Otherwise, return "Evenish".


function oddishOrEvenish(number) {
  let numString = number.toString();
  let numLength = numString.length;
  if (number % 2 === 0 && numLength % 2 === 0) {
    return "Evenish";
  } else if (number % 2 === 1 && numLength % 2 === 1) {
    return "Oddish";
  } else {
    return "Evenish";
  }
}
