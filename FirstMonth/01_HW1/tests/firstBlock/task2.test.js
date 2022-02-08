const secondTask = require('../../src/firstBlock/task2');

describe('secondTask', () => {
    test('check point coordinates', () => {
        expect(secondTask(0,0)).toEqual('точка находится в начале координат');
    });
    test('check point coordinates', () => {
        expect(secondTask(3,1)).toEqual('точка находится в 1-й четверти');
    });
    test('check point coordinates', () => {
        expect(secondTask(-5,8)).toEqual('точка находится во 2-й четверти');
    });
    test('check point coordinates', () => {
        expect(secondTask(-6,-9)).toEqual('точка находится в 3-й четверти');
    });
    test('check point coordinates', () => {
        expect(secondTask(7,-9)).toEqual('точка находится в 4-й четверти');
    });
});