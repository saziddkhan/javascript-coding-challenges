// Write a function that takes in a string str and returns a function that returns str

function returnString(str) {
  return () => str;
}