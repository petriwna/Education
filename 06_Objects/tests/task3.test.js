const findTitle = require('../src/task3');

const arr = [{
    title: 'Some title 1'
},{
    title: 'I like JS'
},{
    user: 'This obj doesn\'t have key title js'
},{
    title: 'Js - is the best!'
}];

const str = 'js';

describe('findTitle', () => {
    test('find string in object', () => {
        expect(findTitle(arr, str)).toEqual([{ title:'I like JS'}, { title: 'Js - is the best!' }]);
    })
})