//Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

function encrypt(s, k) {
  return s.split('').map(function(c) {
    return String.fromCharCode(c.charCodeAt(0) + k);
  }).join('');
}