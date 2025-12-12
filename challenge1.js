// INSTRUCTIONS:
// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  x = x.toLowerCase();
  xReversed = x.split('').reverse().join('');
 
  return x === xReversed;
}

// NOTES:
// I feel good about this level of challenge. My only problem is just not remembering the built-in method names.