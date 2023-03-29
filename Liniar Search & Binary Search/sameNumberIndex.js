let arr = [10, 20, 30, 35, 40, 40, 40, 40, 40, 50, 60, 70, 80, 90];
let target = 40;

function sameNumberIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let result = [];
    if (arr[mid] === target) {
      result.push(mid);
      let i = mid - 1;
      let j = mid + 1;
      while (arr[i] === target) {
        result.unshift(i);
        i -= 1;
      }
      while (arr[j] === target) {
        result.push(j);
        j += 1;
      }
      return result;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(sameNumberIndex(arr, 40));
