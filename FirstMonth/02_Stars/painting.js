function oneFigure() {
    const str = '*  '.repeat(7);
    for (let j = 0; j < 7; j++) {
        console.log(str);
    }
}

oneFigure();

function twoFigure() {
    const horizCount = 5;
    const vertCount = 7;
    const str = '*  '.repeat(7);

    console.log(str);
    for (let i = 0; i < vertCount - 1; ++i) {
        console.log('*' + ('   '.repeat(horizCount)) + '  *');
    }
    console.log(str);
}

twoFigure();

function treeFigure() {
    const str = ' * '.repeat(7);
    const horizCount = 6;
    console.log(str);
    for (let j = horizCount - 1; j >= 1; j--) {
        console.log(' *' + ('   '.repeat(j)) + '*');
    }
    console.log(' *');
}

treeFigure();

function fourFigure() {
    const str = '* '.repeat(7);
    console.log('*');
    for (let j = 0; j < 5; j++) {
        console.log('* ' + ('  '.repeat(j)) + '*');
    }
    console.log(str);
}

fourFigure();

function fiveFigure() {
    let size = 7;
    const str = '* '.repeat(size);
    let space = '  '.repeat(6);
    console.log(space + '*');
    for (let j = 1; j < 6; j++) {
        console.log(('  '.repeat(size - j - 1)) + ' *' + ('  '.repeat(j - 1)) + '*');
    }
    console.log(str);
}

fiveFigure();

function sixFigure() {
    let size = 7;
    const str = '* '.repeat(size);
    let space = '  '.repeat(6);
    console.log(str);
    for (let j = 1; j < 6; j++) {
        console.log(('  '.repeat(j - 1)) + ' *' + ('  '.repeat(size - j - 1)) + '*');
    }
    console.log(space + '*');
}

sixFigure();

const arr =
    [
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   ']
    ];

const size = 7;

function printMatrix(arr) {
    arr.forEach(i => {
            let str = '';
            i.forEach(j => {
                str = str + j
            })
            console.log(str);
        }
    )
}

function sevenFigure() {
    for (let i = 0; i < size; i++) {
        arr[i][i] = '  *'
        arr[i][size - 1 - i] = '  *'
    }
    printMatrix(arr)
}

sevenFigure();

function eightFigure() {
    arr[0].fill('  *');
    for (let i = 0; i < size / 2; i++) {
        arr[i][i] = '  *'
        arr[i][size - 1 - i] = '  *'
    }
    printMatrix(arr);
}

eightFigure();

function nineFigure() {
    arr[size - 1].fill('  *');
    for (let i = Math.floor(size / 2); i < size; i++) {
        arr[i][i] = '  *';
        if (i !== Math.floor(size / 2))
            arr[i][size - i - 1] = ' *';
    }
    printMatrix(arr);
}

nineFigure();