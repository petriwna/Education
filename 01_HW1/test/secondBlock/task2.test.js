const secondTask = require('../../src/secondBlock/task2');

describe('secondTask', () => {
    test('is prime number', () => {
        expect(secondTask(89)).toBe(true);
    });
    test('is prime number', () => {
        expect(secondTask(25)).toBe(false);
    });
});