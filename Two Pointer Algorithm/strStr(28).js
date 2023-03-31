var strStr = function (haystack, needle) {
  let k = needle.length - 1;
  if (k > haystack.length - 1) {
    return -1;
  }
  for (let i = 0; i <= haystack.length - 1 - (needle.length - 1); i++) {
    k = needle.length - 1;
    for (let j = i + needle.length - 1; j >= i; j--) {
      if (haystack[j] !== needle[k]) {
        break;
      } else if (i === j && haystack[j] === needle[k]) {
        return i;
      } else if (haystack[j] === needle[k]) {
        k--;
      }
    }
  }
  return -1;
};
console.log(strStr("hello", "ll"));
