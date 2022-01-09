const getNumber = require('../src/task2');

describe('getNumber', () => {
    const arr = [1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17];
    const arr2 = [0, 2, 8, -4, 0, -122, 13, -4, 28, 12];
    test('get even number or odd', () => {
        expect(getNumber(arr)).toBe(4);
    });
    test('get even number or odd', () => {
        expect(getNumber(arr2)).toBe(13);
    });
});