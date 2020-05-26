function frequencyCounter(word) {
  // Insert code here;
  let frequency = {};
  for (let i = 0; i < word.length; i++) {
    let c = word.charAt(i);
    if (frequency[c])
      frequency[c]++;
    else
      frequency[c] = 1;
  }
  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;