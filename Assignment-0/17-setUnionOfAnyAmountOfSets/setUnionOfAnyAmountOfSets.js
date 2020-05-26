function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let mySet = new Set();
  for (let i = 0; i < args.length; i++) {
    args[i].forEach(mySet.add, mySet);
  }
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;