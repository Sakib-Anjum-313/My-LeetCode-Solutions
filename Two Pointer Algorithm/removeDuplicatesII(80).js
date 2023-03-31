var removeDuplicates = function (nums) {
  let i = -1,
    k = 0,
    j = 1;

  while (j <= nums.length) {
    if (nums[k] !== nums[j]) {
      nums[i + 1] = nums[k];
      i++;
      k = j;
      j++;
    } else {
      while (nums[k] === nums[j]) {
        j++;
      }
      let temp = nums[k];
      nums[i + 1] = temp;
      nums[i + 2] = temp;
      i = i + 2;
      k = j;
      j++;
    }
  }
  return nums;
};

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
