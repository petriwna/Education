module.exports = sixFigure;

function sixFigure() {
    let size = 7;
    const str = '* '.repeat(size);
    const space = '  '.repeat(6);
    const star = space + '*'
    let line = '';
    for (let j = 1; j < 6; j++) {
        line = line + ('  '.repeat(j - 1)) + ' *' + ('  '.repeat(size - j - 1)) + '*\n';
    }
    return (`${str}\n${line}${star}`);
}