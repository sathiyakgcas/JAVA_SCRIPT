// PALINDROME
function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {                         
        return true
    } else {
        return false;
    }
}
 
let str1 = "sun";
let str2 = "class";
let str3 = "mom";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));