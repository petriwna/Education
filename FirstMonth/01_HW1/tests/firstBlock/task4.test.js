const fourthTask = require('../../src/firstBlock/task4');

describe('fourthTask', () => {
   test('get result from (max(a*b*c, a+b+c))+3', () => {
      expect(fourthTask(15,6,9)).toBe(813);
   });
});