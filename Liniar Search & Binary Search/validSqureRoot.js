function validSquireRoot(target) {
  let start = 0;
  let end = target;

  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      
      if (mid * mid === target) {
          return true;
      }
      else if (mid * mid > target) {
          end = mid - 1;
      }
      else {
          start = mid + 1;
      } 
    }
    return false;
}

console.log(validSquireRoot(16));
