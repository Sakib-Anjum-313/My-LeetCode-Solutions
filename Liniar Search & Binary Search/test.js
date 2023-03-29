var twoSum = function (nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in seen) return [i, seen[diff]];

    seen[nums[i]] = i;
  }
}

twoSum([1, 2, 4], 6);

// var twoSum = function(nums, target) {
//     let mp = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i]

//         if (mp.has(diff)) {
//             return [i, mp.get(diff)]
//         }

//         mp.set(nums[i], i)
//     }
// };
