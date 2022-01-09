const {getNextPalindrome, palindrome} = require('../src/task5');

describe('palindrome', () => {
    test('check is palindrome', () => {
        expect(palindrome(123321)).toBe(true);
    });
    test('check is palindrome', () => {
        expect(palindrome(125621)).toBe(false);
    });
});

describe('getNextPalindrome', () => {
    test('find next number palindrome', () => {
        expect(getNextPalindrome(7)).toBe(11);
    });
    test('find next number palindrome', () => {
        expect(getNextPalindrome(99)).toBe(101);
    });
    test('find next number palindrome', () => {
        expect(getNextPalindrome(132)).toBe(141);
    });
    test('find next number palindrome', () => {
        expect(getNextPalindrome(888)).toBe(898);
    });
    test('find next number palindrome', () => {
        expect(getNextPalindrome(999)).toBe(1001);
    });
});