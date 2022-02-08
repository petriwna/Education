const numberOfOddEl = require('../../src/thirdBlock/task7');
const arr = [19, 21, 5, 6, 1];

describe('numberOfOddEl', () => {
    test('get number of odd elements in the array', () => {
        expect(numberOfOddEl(arr)).toBe(4);
    });
});