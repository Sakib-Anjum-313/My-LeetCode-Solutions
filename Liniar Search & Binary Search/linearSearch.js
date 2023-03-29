
let arr = [12, 43, 52, 45, 23, 24, 29, 68, 42, 15];

let target = 29;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return 'data fount ' + i;
        }
    }
    return 'data not found';
};

console.log(linearSearch(arr, target));