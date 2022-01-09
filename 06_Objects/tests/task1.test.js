const getCookingTime = require('../src/task1');

describe('getCookingTime', () => {
    test('get time cooking eggs', () => {
        expect(getCookingTime(0)).toBe(0);
    });
    test('get time cooking eggs', () => {
        expect(getCookingTime(5)).toBe(5);
    });
    test('get time cooking eggs', () => {
        expect(getCookingTime(9)).toBe(10);
    });
});