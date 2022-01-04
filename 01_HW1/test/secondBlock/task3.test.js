const {binarySquareRoot, selectionSquareRoot} = require('../../src/secondBlock/task3');

describe('binarySquareRoot', () => {
    test('get number square root', () => {
        expect(binarySquareRoot(256)).toBe(16);
    });
});

describe('selectionSquareRoot', () => {
    test('get number square root', () => {
        expect(selectionSquareRoot(256)).toBe(16);
    });
});