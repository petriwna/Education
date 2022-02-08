const {validation, getArrRandom, getRandom} = require('../src/script');


jest.mock('../src/utils', () => {
    const originalModule = jest.requireActual('../src/utils');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        getRandomNumber: jest.fn(() => 2),
        getNodeValue: jest.fn(() => 5)
            .mockImplementationOnce(() => 0)
            .mockImplementationOnce(() => 5)
    };
});

const state = {
    startNumber: 1,
    endNum: 5,
    randomNumber: 0,
    randomArray: []
}

describe('getArrRandom', () => {
    test('get array from randomizing', () => {
        expect(getArrRandom(state)).toEqual({
            startNumber: 1,
            endNum: 5,
            randomNumber: 0,
            randomArray: [1, 2, 3, 4, 5]
        })
    });
});

describe('getRandom', () => {
    test('get from randomizing', () => {
        const state = {
            startNumber: 1,
            endNum: 5,
            randomNumber: 0,
            randomArray: [3]
        }
        expect(getRandom(state)).toEqual(3);
    });
});

describe('validation', () => {
    test('is valid input number', () => {
        expect(validation(1, 6)).toEqual(true);
    });
    test('is valid input number', () => {
        expect(validation('s', 6)).toEqual(false);
    });
    test('is valid input number', () => {
        expect(validation(32, 6)).toEqual(false);
    });
});