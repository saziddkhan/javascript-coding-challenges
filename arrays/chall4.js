// Create a function which returns the number of true values there are in an array.

function countTrue(array) {
  return array.filter(x=>x==true).length
}