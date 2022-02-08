module.exports = fourFigure;

function fourFigure() {
    const str = '* '.repeat(7);
    const star = '*';
    let line = '';
    for (let j = 0; j < 5; j++) {
        line = line + '* ' + ('  '.repeat(j)) + '*\n';
    }
    return (`${star}\n${line}${str}`)
}