const reverseNumber = require('../../src/secondBlock/task6');

describe('reverseNumber', () => {
    test('get reverse number, example 123 to 321', () => {
       expect(reverseNumber(123)).toBe(321);
    });
});