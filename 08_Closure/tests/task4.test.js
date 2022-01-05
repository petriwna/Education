const cache = require('../src/task4');

describe('cache', () => {
    let complexFunction = function (arg1, arg2) {
        return arg1+arg2;
    }
    let cachedFunc = cache(complexFunction);

    test('set argument in cache', () => {
        expect(cachedFunc('foo', 'baz')).toBe(true);
    });
    test('set argument in cache', () => {
        expect(cachedFunc('foo', 'baz')).toBe(false);
    });
    test('set argument in cache', () => {
        expect(cachedFunc('foo', 'rax')).toBe(true);
    });
});