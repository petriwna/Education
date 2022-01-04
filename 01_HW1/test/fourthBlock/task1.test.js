const firstTask = require('../../src/fourthBlock/task1');

describe('firstTask', () => {
    test('get day week by number', () => {
        expect(firstTask(2)).toBe('Вторник');
    });
    test('get day week by number', () => {
        expect(firstTask(6)).toBe('Суббота');
    });
});