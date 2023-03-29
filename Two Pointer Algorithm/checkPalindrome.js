

let str = 'madam';

function checkPalindrome(str) {
    
    let i = 0;
    let j = str.length - 1;


    while (i < j) {
        if (str[i] != str[j]) {
          return `i ${i} & j ${j}`;
        }
        i++;
        j--;
    }
    return 'yes palindrome'
}

console.log(checkPalindrome(str));