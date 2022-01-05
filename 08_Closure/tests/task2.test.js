const getSum = require('../src/task2');

const str1 = '123';
const str2 = '324';
const str3 = '111111111111111111111111111111111111111111111111111';
const str4 = '23333333333333333333333333333333333333333333333333';

describe('getSum', () => {
    test('two string big number get sum', () => {
        expect(getSum(str1, str2)).toBe('447');
    });
    test('two string big number get sum', () => {
        expect(getSum(str3, str4)).toBe('1.3444444444444445e+50');
    });
});