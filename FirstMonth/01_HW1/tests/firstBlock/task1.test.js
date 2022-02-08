const firstTask = require('../../src/firstBlock/task1');

describe('firstTask', () =>{
    test('if a is even a*b else a+b', () => {
        expect(firstTask(6, 4)).toBe(24);
    });
    test('if a is even a*b else a+b', () => {
        expect(firstTask(3, 7)).toBe(10);
    });
});