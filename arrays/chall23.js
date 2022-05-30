//Create a function that takes two arguments, a number of slides nSlide and a string message, and returns the encoded message.

function encode(nSlide, message) {
  let encodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    let newCharCode = charCode + nSlide;
    let newChar = String.fromCharCode(newCharCode);
    encodedMessage += newChar;
  }
  return encodedMessage;
}