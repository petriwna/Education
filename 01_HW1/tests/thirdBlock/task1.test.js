const minArray = require('../../src/thirdBlock/task1');

const arr = [19, 21, 5, 6, 1];
describe('minArray', () => {
    test('get min element from array', () => {
        expect(minArray(arr)).toBe(1);
    });
});