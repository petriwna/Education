const maxArray = require('../../src/thirdBlock/task2');
const arr = [19, 21, 5, 6, 1];

describe('maxArray', () => {
   test('get max element from array', () => {
       expect(maxArray(arr)).toBe(21);
   });
});