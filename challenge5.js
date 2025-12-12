/**
  Task:
    Given an array of integers, your function should return a new array equivalent to
    performing exactly 1 complete pass on the original array. Your function should be pure,
    i.e. it should not mutate the input array.
**/

function bubblesortOnce(a) {
  let result = [...a];
  let swapped = true;
  
  do {
    swapped = false;
  
    for (let i = 0; i < a.length - 1; i++) {
      
      if (result[i] > result[i + 1]) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
      
    }
    break;
  } while (swapped);
  
  return result;
}

/** 
  NOTES:
    This one was a challenge and I had to read a bit more about bubble sorting.
    I had to use a break in the while loop to prevent it from looping more than once.
**/