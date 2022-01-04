const indexMaxArray = require('../../src/thirdBlock/task4');
const arr = [19, 21, 5, 6, 1];

describe('indexMaxArray', () => {
    test('get index max element from array', () => {
        expect(indexMaxArray(arr)).toBe(1);
    })
})
