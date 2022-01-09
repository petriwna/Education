const reverseArray = require('../../src/thirdBlock/task6');
const arr = [19, 21, 5, 6, 1];

describe('reverseArray', () => {
    test('get revers array', () => {
        expect(reverseArray(arr)).toEqual([1, 6, 5, 21, 19]);
    });
});