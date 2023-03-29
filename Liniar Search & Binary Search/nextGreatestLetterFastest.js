let arr = ["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"];

var nextGreatestLetter = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (left === arr.length) {
    return arr[0];
  } else {
    return arr[left];
  }
};

console.log(nextGreatestLetter(arr, "q"));
