/**
  A pangram is a sentence that contains every single letter of the alphabet 
  at least once. For example, the sentence "The quick brown fox jumps over 
  the lazy dog" is a pangram, because it uses the letters A-Z at least once 
  (case is irrelevant).

  Given a string, detect whether or not it is a pangram. 
  Return True if it is, False if not. 
  Ignore numbers and punctuation.
**/

function isPangram(string){
  const alph = [];
  const newString = string.replaceAll(/[^a-zA-Z]/g, '');
  
  for (let i = 0; i < newString.length; i++) {
    if (!alph.includes(newString[i].toLowerCase())) {
      alph.push(newString[i].toLowerCase());
    }
  }
  
  if (alph.length === 26) {
    return true;
  } else {
    return false;
  }
}

/**
  NOTES:
    This was challenging because I'm still getting used to the syntax of regular
    expressions.
**/