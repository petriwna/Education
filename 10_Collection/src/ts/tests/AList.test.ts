import {AList} from "../AList";

describe('add', () => {
    test('add element to array', () => {
        const aList = new AList([7, 8]);
        expect((() => {
            aList.add(9)
            return aList.getSize()
        })()).toEqual(3);
    });
});

describe('clear', () => {
    test('clear array', () => {
        const aList = new AList([7, 8]);
        expect((() => {
            aList.clear()
            return aList.getSize()
        })()).toEqual(0);
    });
});

describe('getSize', () => {
    test('get size array', () => {
        const aList = new AList([7, 8]);
        expect(aList.getSize()).toBe(2);
    });
});

describe('set', () => {
    test('set element to index', () => {
        const aList = new AList([7, 8, 5, 6]);
        expect((() => {
            aList.set(1, 3)
            return aList.toArray()
        })()).toEqual([7, 8, 5, 1]);
    });
    test('set element to index', () => {
        const aList = new AList([]);
        expect((() => {
            aList.set(1, 0)
            return aList.toArray()
        })()).toEqual([1]);
    });
});

describe('get', () => {
    test('get element at index', () => {
        const aList = new AList([7, 8, 5, 6]);
        expect(aList.get(3)).toBe(6);
    });
});

describe('remove', () => {
    test('remove element add return him', () => {

    });
});

describe('toArray', () => {
    test('return array', () => {
        const aList = new AList([7]);
        expect(aList.toArray()).toEqual([7]);
    });
});

describe('toString', () => {
    test('return string', () => {
        const aList = new AList([7]);
        expect(aList.toString()).toEqual('7');
    });
});

describe('contains', () => {
    test('is element in array', () => {
        const aList = new AList([7, 9, 5]);
        expect(aList.contains(9)).toEqual(true);
    });
    test('is element in array', () => {
        const aList = new AList([7, 9, 5]);
        expect(aList.contains(1)).toEqual(false);
    });
});

describe('minValue', () => {
    test('return min element array', () => {
        const aList = new AList([7, 9, 5, 3, 6, 0]);
        expect(aList.minValue()).toEqual(0);
    });
});

describe('maxValue', () => {
    test('return max element array', () => {
        const aList = new AList([7, 9, 5, 3, 6, 0]);
        expect(aList.maxValue()).toEqual(9);
    });
});

describe('minIndex', () => {
    test('return index min element array', () => {
        const aList = new AList([7, 9, 5, 3, 6, 0]);
        expect(aList.minIndex()).toEqual(5);
    });
});

describe('maxIndex', () => {
    test('return index max element array', () => {
        const aList = new AList([7, 9, 5, 3, 6, 0]);
        expect(aList.maxIndex()).toEqual(1);
    });
});

describe('reverse', () => {
    test('reverse elements array', () => {
        const aList = new AList([7, 9, 5, 3, 6, 0]);
        expect((() => {
            aList.revers()
            return aList.toArray()
        })()).toEqual([0, 6, 3, 5, 9, 7]);
    });
});

describe('halfReverse', () => {
    test('reverse half array', () => {
        const aList = new AList([19, 21, 5, 6, 9, 10]);
        expect((() => {
            aList.halfRevers()
            return aList.toArray()
        })()).toEqual([6, 9, 10, 19, 21, 5]);
    });
});

describe('retainAll', () => {
    test('retain coincidence in array', () => {

    });
});

describe('removeAll', () => {
    // test('remove coincidence in array', () => {
    //     const aList = new AList([7, 9, 5, 3, 6, 0]);
    //     expect((() => {
    //         aList.removeAll([7, 9])
    //         return aList.toArray()
    //     })()).toEqual([5, 3, 6, 0]);
    // });
});

describe('sort', () => {
    // test('sort array', () => {
    //     const aList = new AList([7, 9, 5, 3, 6, 0]);
    //     expect((() => {
    //         aList.sort()
    //         return aList.toArray()
    //     })()).toEqual([0, 3, 5, 6, 7, 9]);
    // });
});