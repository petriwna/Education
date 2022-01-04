const fourthTask = require('../../src/secondBlock/task4');

describe('fourthTask', () => {
    test('get factorial number', () => {
        expect(fourthTask(15)).toBe(1307674368000);
    });
});