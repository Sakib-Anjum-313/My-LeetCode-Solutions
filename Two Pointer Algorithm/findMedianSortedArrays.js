let arr1 = [1, 2];
let arr2 = [3,4];
let newArray = [];

function remainingItems(arr, k) {
  for (; k <= arr.length - 1; k++) {
    newArray.push(arr[k]);
  }
  
}

function sortedTwoArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let condition = true;

  while (condition) {
    if (i == arr1.length) {
      condition = false;
      remainingItems(arr2, j);
    } else if (j == arr2.length) {
      remainingItems(arr1, i);
      condition = false;
    } else {
      condition = true;
    }
    if (arr1[i] === arr2[j]) {
      newArray.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      newArray.push(arr2[j]);
      j++;
    }
  }
  return newArray;
}

var findMedianSortedArrays = function (nums1, nums2) {
  let sortedArray = sortedTwoArray(nums1, nums2);
  let median;
  let mid = (sortedArray.length - 1) / 2;
  if (!Number.isInteger(mid)) {
    mid = Math.floor(mid);
    median = (sortedArray[mid] + sortedArray[mid + 1]) / 2;
    return median;
  } else {
    median = sortedArray[mid];
    return median;
  }
  
};

console.log(findMedianSortedArrays([1, 2], [3,4]));
 