const fifthTask = require('../../src/secondBlock/task5');

describe('fifthTask', () => {
    test('get of the digits of a number', () => {
        expect(fifthTask(382)).toBe(13);
    });
});