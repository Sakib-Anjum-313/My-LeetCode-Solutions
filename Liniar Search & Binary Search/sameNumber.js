let arr = [10, 20, 30, 40, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70, 80, 90];
let target = 40;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
          let count = 1;
          let i = mid - 1;
          let j = mid + 1;
          while (arr[i] === target) {
              count += 1;
              i -= 1;
          };
          while (arr[j] === target) {
              count += 1;
              j += 1;
          };
          return count;
      
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(binarySearch(arr, 40));
