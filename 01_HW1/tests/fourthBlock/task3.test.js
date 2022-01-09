const numToStr999 = require('../../src/fourthBlock/task3');

describe('numToStr999', () => {
    test('get number to string', () => {
        expect(numToStr999(15)).toBe('пятнадцать')
    });
    test('get number to string', () => {
        expect(numToStr999(1)).toBe('один')
    });
    test('get number to string', () => {
        expect(numToStr999(57)).toBe('пятьдесят семь')
    });
    test('get number to string', () => {
        expect(numToStr999(682)).toBe('шестьсот восемьдесят два')
    });
    test('get number to string', () => {
        expect(numToStr999(909)).toBe('девятьсот девять')
    });
});