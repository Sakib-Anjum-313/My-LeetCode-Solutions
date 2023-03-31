


var removeDuplicates = function (nums) {
  let innerIndex = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[innerIndex - 1] || nums[i] !== nums[innerIndex - 2]) {
      nums[innerIndex] = nums[i];
      innerIndex++;
    }
  }
  return innerIndex;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
