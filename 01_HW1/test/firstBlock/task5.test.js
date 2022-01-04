const fifthTask = require('../../src/firstBlock/task5');

describe('fifthTask', () => {
    test('get grade student', () => {
        expect(fifthTask(15)).toBe('F');
    });
    test('get grade student', () => {
        expect(fifthTask(31)).toBe('E');
    });
    test('get grade student', () => {
        expect(fifthTask(55)).toBe('D');
    });
    test('get grade student', () => {
        expect(fifthTask(72)).toBe('C');
    });
    test('get grade student', () => {
        expect(fifthTask(89)).toBe('B');
    });
    test('get grade student', () => {
        expect(fifthTask(100)).toBe('A');
    });
    test('get grade student', () => {
        expect(fifthTask(250)).toBe('It is not a rating!');
    });
});
