//Length of a Nested Array

function length(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      count += length(array[i]);
    } else {
      count++;
    }
  }
  return count;
}