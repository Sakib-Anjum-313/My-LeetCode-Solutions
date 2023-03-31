var sortColors = function (nums) {
  let swap = (l, r) => {
    [nums[l], nums[r]] = [nums[r], nums[l]];
  };

  let color = 0;

  for (let i = 0; i <= nums.length - 1; ) {
    let j = i;

    while (j <= nums.length - 1) {
      if (nums[j] === color) {
        swap(i, j);
        i++;
      }
      j++;
    }
    color++;
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
