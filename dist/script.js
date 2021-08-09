function palindrome(str) {
  var toLower = str.toLowerCase().replace(/[\W_]/g, '');
  var reversedStr = toLower.split('').reverse().join('');

  if(reversedStr === toLower) {
    return true;
  }
  return false;
}



console.log(palindrome("eye"));
console.log(palindrome(" _RACE ._!car"));