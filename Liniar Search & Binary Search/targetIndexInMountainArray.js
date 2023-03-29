function targetIndexInMountainArray(arr, target) {
  let start = 0;
  let end = arr.length - 1;



let findPeakIndex = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  console.log(end, target);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else if (arr[mid] < arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      end = mid - 1;
    } else {
      if (arr[start] > arr[end]) {
        return start;
      } else {
        return end;
      }
    }
  }
};

 let peakIndex = findPeakIndex(arr, target);
  
  console.log(peakIndex);




  if (target === arr[peakIndex + 1]) {
    return peakIndex + 1;
  }
  else if (target === arr[peakIndex - 1]) {
     return peakIndex - 1;
  }
  else if (target === arr[peakIndex]) {
     return peakIndex;
  }

  else if (target < arr[peakIndex + 1] && target > arr[peakIndex - 1]) {
    start = peakIndex + 1;
  }
  else if (target < arr[peakIndex + 1] && target < arr[peakIndex - 1]) {
    end = peakIndex - 1;
  }
  console.log(start, end);
  if (arr[start] < arr[end]) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      console.log(start, end);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  } else {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      console.log(start, end);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
}
console.log(targetIndexInMountainArray([1, 2, 3, 4, 5, 10, 9, 8, 7, 6], 10));

// [3, 5, 3, 2, 0];
