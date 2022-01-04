const thirdTask = require('../../src/firstBlock/task3');

describe('thirdTask', () => {
   test('get sum only positive number', () => {
      expect(thirdTask(-9, 12, 8)).toEqual(20);
   });
   test('get sum only positive number', () => {
      expect(thirdTask(-9, 35, -6)).toEqual(35);
   });
});