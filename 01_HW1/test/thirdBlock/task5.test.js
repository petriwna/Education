const sumArray = require('../../src/thirdBlock/task5');
const arr = [19, 21, 5, 6, 1];

describe('sumArray', () => {
    test('get sum odd index element from array', () =>{
        expect(sumArray(arr)).toBe(27);
    });
});