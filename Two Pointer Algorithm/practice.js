let arr1 = [1,3];
let arr2 = [2];
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

console.log(sortedTwoArray(arr1, arr2));
