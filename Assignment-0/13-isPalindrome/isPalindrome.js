function isPalindrome(word) {
  // Insert code here;
  let str = "";
  for (let i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  if (str == word)
    return true;
  return false;
}

// Do not edit this line;
module.exports = isPalindrome;