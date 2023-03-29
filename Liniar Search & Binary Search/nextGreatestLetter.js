let arr = ["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"];
let target = 57;

function nextGreatestLetter(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2) + 1;

    if (arr[mid] === target && arr[mid] < arr[arr.length - 1]) {
      let i = mid + 1;
      while (arr[i] === target) {
        i++;
      }
      return `same ${arr[i]}`;
    }
    if (arr[arr.length - 1] === target) {
      return arr[0];
    }

    if (start == end) {
      console.log(start);
      if (arr[arr.length - 1] === target) {
        return arr[0];
      }
      if (arr[start] === arr[arr.length - 1]) {
        return arr[0];
      }
      if (arr[start] === arr[0] && arr[start] > target) {
        return arr[0];
      }

      return arr[start + 1];
    } else if (arr[mid] < target) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }
}
console.log(nextGreatestLetter(arr, "n"));
