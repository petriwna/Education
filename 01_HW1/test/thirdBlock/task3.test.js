const indexMinArray = require('../../src/thirdBlock/task3');
const arr = [19, 21, 5, 6, 1];

describe('indexMinArray', () => {
    test('get index min element from array', () =>{
        expect(indexMinArray(arr)).toBe(4);
    });
});