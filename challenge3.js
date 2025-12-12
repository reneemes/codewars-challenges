/** 
  Trolls are attacking your comment section!

  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

  Your task is to write a function that takes a string and return a new string with all vowels removed.

  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

  Note: for this kata y isn't considered a vowel.
**/

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let x = ''
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      x += str[i]
    }
  }
  return x;
}

/** 
  NOTE:
    I had a difficult time with this one because I was trying to manipulate the string in place instead of just creating a new one and returning it.
**/