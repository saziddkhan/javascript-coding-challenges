// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array


function countNegatives(array) {
  return array.filter(num => num < 0).length;
}