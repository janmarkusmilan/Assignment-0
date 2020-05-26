function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1)
    throw new Error('Array length is 1 or lower');

  for (let i = 0; i < nums.length; i++) {
    if (i == nums.length - 1)
      return false;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target)
        return true;
    }
  }
}

// Do not edit this line;
module.exports = pairSum;