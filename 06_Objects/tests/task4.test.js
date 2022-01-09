const countCharacters = require('../src/task4');

describe('countCharacters', () => {
    test('taking string, return object key - characters, value - number of repetitions of characters', () => {
        expect(countCharacters('sparrow')).toEqual({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1});
    });
    test('taking string, return object key - characters, value - number of repetitions of characters', () => {
        expect(countCharacters('a 2ab !d')).toEqual({a: 2, b:1, d:1, 2:1});
    });
    test('taking string, return object key - characters, value - number of repetitions of characters', () => {
        expect(countCharacters('aabcddeffge')).toEqual({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2,
            g: 1});
    });
});