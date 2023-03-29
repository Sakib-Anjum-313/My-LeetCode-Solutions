
let words = ["abc", "car", "ppl", "adal", "racecar", "cool"];


function checkPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function firstPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (checkPalindrome(arr[i])) {
          return arr[i];
        }
    }
    return "";
}

console.log(firstPalindrome(words));
