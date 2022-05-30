//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.


function rightShift(num1, num2) {
    return num1 >> num2;
    }



//or

const shiftToRight = (x, y) => 
  Math.floor(x / 2 ** y)