


let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 60;


var search = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start = end) {
//         let mid = Math.floor((start + end) / 2);

//         if (arr[mid] === target) {
//             return 'data found at ' + mid; 
//         }
//         else if (arr[mid] < target) {
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }
//     }

//     return 'data not found'
// };

console.log(binarySearch(arr, 7));