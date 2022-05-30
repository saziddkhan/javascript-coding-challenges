// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array

function splitDigits(a) {
    return a.toString().split("").map(Number);
    }

    //or

    function myFunction( a ) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}
