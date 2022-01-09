module.exports = {getNextPalindrome, palindrome};

function palindrome(num) {
    num = '' + num;
    if (num.length < 2) return false;
    for (let i = 0; i < num.length / 2; i++) {
        if (num[i] !== num[num.length - (i + 1)])
            return false
    }
    return true;
}

function getNextPalindrome(number) {
    let result = number;
    while (!palindrome(++result)) {
    }
    return result;
}