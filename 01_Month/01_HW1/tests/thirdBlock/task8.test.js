const reverseHalfArray = require('../../src/thirdBlock/task8');
const arr = [19, 21, 5, 6, 9, 10];

describe('reverseHalfArray', () => {
    test('get revers half array', () => {
        expect(reverseHalfArray(arr)).toEqual([ 6, 9, 10, 19, 21, 5]);
    });
});