let arr = [10, 20, 30, 40, 50, 55, 55, 55, 58, 60, 70, 80, 90, 100, 100, 120];
let target = 57;

function flooring(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start === arr.length ? arr[0] : arr[start];
}
console.log(flooring(arr, 121));
