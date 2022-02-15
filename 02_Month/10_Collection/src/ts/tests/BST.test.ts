import {BST} from "../BST";

describe('init', () => {
    test('init tree', () => {
        const bst = new BST();
        expect((() => {
            bst.init([7, 8, 5, 6]);
            return bst.toArray();
        })()).toEqual([7, 5, 6, 8]);
    });
});

describe('insert', () => {
    test('inserting a node into a tree', () => {
        const bst = new BST();
        expect((() => {
            bst.init([7, 8, 5, 6]);
            bst.insert(9);
            return bst.toArray();
        })()).toEqual([7, 5, 6, 8, 9]);
    });
    test('inserting a node into a tree', () => {
        const bst = new BST();
        expect((() => {
            bst.insert(7);
            return bst.toArray();
        })()).toEqual([7]);
    });
});

describe('toArray', () => {
    test('tree to array', () => {
        const bst = new BST();
        expect((() => {
            bst.init([7, 9, 5, 3, 6, 0]);
            return bst.toArray();
        })()).toEqual([7, 5, 3, 6, 0, 9]);
    })
});

describe('clear', () => {
    // test('clear tree', () => {
    //     const bst = new BST();
    //     expect((() => {
    //         bst.init([7, 9, 5, 3, 6, 0]);
    //         bst.clear();
    //         return bst.toArray();
    //     })()).toEqual([]);
    // })
});

describe('size', () => {
    test('get size tree', () => {
        const bst = new BST();
        expect((() => {
            bst.init([7, 9, 5, 3, 6, 0]);
            return bst.size();
        })()).toEqual(6);
    })
});

describe('search', () => {
    test('search value in tree', () => {
        const bst = new BST();
        expect((() => {
            bst.init([7, 9, 5, 3, 6, 0]);
            return bst.search(8);
        })()).toEqual(null);
    })
    test('search value in tree', () => {
        const bst = new BST();
        expect((() => {
            bst.init([7, 9]);
            return bst.search(9);
        })()).toEqual({
            "data": 9,
            "left": null,
            "right": null
        });
    })
});