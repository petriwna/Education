const tickets = require('../src/task1');

describe('tickets', () => {
    test('get YES if have change of money, else NO', () => {
        const person = [25, 25, 50];
        expect(tickets(person)).toBe('YES');
    });
    test('get YES if have change of money, else NO', () => {
        const person = [25, 100];
        expect(tickets(person)).toBe('NO');
    });
    test('get YES if have change of money, else NO', () => {
        const person = [25, 25, 50, 100];
        expect(tickets(person)).toBe('YES');
    });
    test('get YES if have change of money, else NO', () => {
        const person = [25, 50, 100];
        expect(tickets(person)).toBe('NO');
    });
    test('get YES if have change of money, else NO', () => {
        const person = [25, 25, 50, 100];
        expect(tickets(person)).toBe('YES');
    });
});