module.exports = fiveFigure;

function fiveFigure() {
    let size = 7;
    const str = '* '.repeat(size);
    let space = '  '.repeat(6);
    const firstLine = space + '*';
    let line = ''
    for (let j = 1; j < 6; j++) {
        line = line + ('  '.repeat(size - j - 1)) + ' *' + ('  '.repeat(j - 1)) + '*\n';
    }
    return (`${firstLine}\n${line}${str}`);
}