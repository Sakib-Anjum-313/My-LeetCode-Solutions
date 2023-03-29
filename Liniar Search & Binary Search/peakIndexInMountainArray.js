function peakIndexInMountainArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        }
        else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if (arr[mid] < arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else {
            if (arr[start] > arr[end]) {
                return start;
            }
            else {
                return end;
            }
        }
    } 
}
console.log(peakIndexInMountainArray([2,3, 5, 3, 2, 0]));