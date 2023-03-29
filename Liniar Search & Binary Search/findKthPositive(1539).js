let arr = [2, 3, 4, 7, 11];
let target = 5;

function findKthPositive(arr, target) {
  let ma = [];
  let n = 1;
  let i = 0;

  while (ma.length < target) {
    if (n === arr[i]) {
      i++;
      n++;
    } else {
      ma.push(n);
      n++;
    }
  }
  console.log(ma)
  return ma[target - 1];
}

console.log(findKthPositive(arr, 5));
