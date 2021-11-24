function isPalindrome(word) {
  const string = word.toLowerCase();

  const wordReverse = string.split("").reverse().join("");
  return string === wordReverse;
}

/* 
  Add your pseudocode here:
receive string argument 

make string all lowercase 

split string into array, reverse array, join back to string

if input is strictly equal to reversed word
  return true 
else
  return false

---------- or ------------

reverse string
 if the input is the same as the return input
  return true
 else 
  return false


*/

/*
  Add written explanation of your solution here
  First made sure word was all lower case to be able to compare. 
  The split word into array, in order to reverse array, then merged array back to a string with join. 
  Finally compare if reversed word is equal to the input. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // mom === mom => true
  // car === rac => false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting true:");
  console.log("=>", isPalindrome("CivIC"));

  console.log("Expecting false:");
  console.log("=>", isPalindrome("civil"));
}

module.exports = isPalindrome;
