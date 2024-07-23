//FINDING VOWELS
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

const sentence = "Find vowels in a string using JavaScript,";
console.log(`Number of vowels in "${sentence}":`, countVowels(sentence)); 
