import {LList} from "../LList";

describe('add', () => {
    test('add element to list', () => {
        const lList = new LList([]);
        expect((() => {
            lList.add(2)
            return lList.getSize()
        })()).toEqual(1);
    });
    test('add element to list', () => {
        const lList = new LList([9, 10]);
        expect((() => {
            lList.add(3);
            return lList.toArray()
        })()).toEqual([9, 10, 3]);
    });
});

describe('clear', () => {
    // test('clear array', () => {
    //     const lList = new LList([7, 8]);
    //     expect((() => {
    //         lList.clear()
    //         return lList.toArray()
    //     })()).toEqual([]);
    // });
});

describe('getSize', () => {
    // test('get size array', () => {
    //     const lList = new LList([7, 8]);
    //     expect(lList.getSize()).toBe(2);
    // });
});

describe('set', () => {
    // test('set element to index', () => {
    //     const lList = new LList([7, 8, 5, 6]);
    //     expect((() => {
    //         lList.set(1, 3)
    //         return lList.toArray()
    //     })()).toEqual([7, 8, 5, 1]);
    // });
    // test('set element to index', () => {
    //     const lList = new LList([]);
    //     expect((() => {
    //         lList.set(1, 0)
    //         return lList.toArray()
    //     })()).toEqual([1]);
    // });
});

describe('get', () => {
    // test('get element at index', () => {
    //     const lList = new LList([7, 8, 5, 6]);
    //     expect(lList.get(3)).toBe(6);
    // });
});

describe('remove', () => {
    test('remove element add return him', () => {

    });
});

describe('toArray', () => {
    // test('return array', () => {
    //     const lList = new LList([7]);
    //     expect(lList.toArray()).toEqual([7]);
    // });
});

describe('toString', () => {
    // test('return string', () => {
    //     const lList = new LList([7]);
    //     expect(lList.toString()).toEqual('7');
    // });
});

describe('contains', () => {
    // test('is element in array', () => {
    //     const lList = new LList([7, 9, 5]);
    //     expect(lList.contains(9)).toEqual(true);
    // });
    // test('is element in array', () => {
    //     const lList = new LList([7, 9, 5]);
    //     expect(lList.contains(1)).toEqual(false);
    // });
});

describe('minValue', () => {
    // test('return min element array', () => {
    //     const lList = new LList([7, 9, 5, 3, 6, 0]);
    //     expect(lList.minValue()).toEqual(0);
    // });
});

describe('maxValue', () => {
    // test('return max element array', () => {
    //     const lList = new LList([7, 9, 5, 3, 6, 0]);
    //     expect(lList.maxValue()).toEqual(9);
    // });
});

describe('minIndex', () => {
    // test('return index min element array', () => {
    //     const lList = new LList([7, 9, 5, 3, 6, 0]);
    //     expect(lList.minIndex()).toEqual(5);
    // });
});

describe('maxIndex', () => {
    // test('return index max element array', () => {
    //     const lList = new LList([7, 9, 5, 3, 6, 0]);
    //     expect(lList.maxIndex()).toEqual(1);
    // });
});

describe('reverse', () => {
    // test('reverse elements array', () => {
    //     const lList = new LList([7, 9, 5, 3, 6, 0]);
    //     expect((() => {
    //         lList.revers()
    //         return lList.toArray()
    //     })()).toEqual([0, 6, 3, 5, 9, 7]);
    // });
});

describe('halfReverse', () => {
    // test('reverse half array', () => {
    //     const lList = new LList([19, 21, 5, 6, 9, 10]);
    //     expect((() => {
    //         lList.halfRevers()
    //         return lList.toArray()
    //     })()).toEqual([6, 9, 10, 19, 21, 5]);
    // });
});

describe('retainAll', () => {
    test('retain coincidence in array', () => {

    });
});

describe('removeAll', () => {
    // test('remove coincidence in array', () => {
    //     const lList = new LList([7, 9, 5, 3, 6, 0]);
    //     expect((() => {
    //         lList.removeAll([7, 9])
    //         return lList.toArray()
    //     })()).toEqual([5, 3, 6, 0]);
    // });
});

describe('sort', () => {
    // test('sort array', () => {
    //     const lList = new LList([7, 9, 5, 3, 6, 0]);
    //     expect((() => {
    //         lList.sort()
    //         return lList.toArray()
    //     })()).toEqual([0, 3, 5, 6, 7, 9]);
    // });
});