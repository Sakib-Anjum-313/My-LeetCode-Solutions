// let s = "  hello world  ";
let s = "a good    example";

var reverseWords = function (s) {
  s = s.split(" ");
  console.log(s);
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "") {
      s.splice(i, 1);
    }
  }
  console.log(s);
  let j = 0;
  let k = s.length - 1;
  while (j < k) {
    let temp = s[j];
    s[j] = s[k];
    s[k] = temp;
    j++;
    k--;
  }
  console.log(s);
  s = s.join(" ");
  return s;
};

console.log(reverseWords(s));


// var reverseWords = function (s) {
//   return s
//     .split(" ")
//     .filter((s) => s !== "")
//     .reverse()
//     .join(" ");
// };
