let arr = [10, 20, 30, 40, 50, 55, 55, 55, 58, 60];
let target = 57;

function flooring(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end === arr.length - 1
    ? target === arr[end] + 1
      ? arr[end]
      : "No Flooring Value Found"
    : start === 0
    ? target === arr[start] - 1
      ? arr[start]
      : "No Flooring Value Found"
    : `here ${arr[end]}`;
}
console.log(flooring([5,0], ));
