var removeDuplicates = function (nums) {
  let i = 0;
  let j = i + 1;
  // let result = [];

  while (j <= nums.length - 1) {
    if (nums[i] !== nums[j]) {
      // result.push(nums[i]);
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  // nums = result;
  return nums;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
