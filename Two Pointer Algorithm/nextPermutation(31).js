var nextPermutation = function (nums) {
  let swap = (l, r) => {
    [nums[l], nums[r]] = [nums[r], nums[l]];
  };
  let reverse = (left) => {
    let right = nums.length - 1;
    while (left < right) {
      swap(left, right);
      left++;
      right--;
    }
  };

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] > nums[i]) {
        swap(i, j);
        reverse(i + 1);
        return;
      }
    }
  }
  reverse(0);
};
console.log(nextPermutation([1, 2, 3]));

// var nextPermutation = function (N) {
//   const swap = (a, b) => ([N[a], N[b]] = [N[b], N[a]]);
//   let len = N.length - 1,
//     i,
//     j;
//   for (i = len - 1; N[i] >= N[i + 1]; ) i--;
//   for (let k = i + 1; len > k; k++, len--) swap(k, len);
//   if (~i) {
//     for (j = i + 1; N[i] >= N[j]; ) j++;
//     swap(i, j);
//   }
// };
