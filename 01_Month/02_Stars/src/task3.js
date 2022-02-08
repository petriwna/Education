module.exports = treeFigure;

function treeFigure() {
    const str = ' * '.repeat(7);
    const horizCount = 6;
    const star = '*';
    let line = '';
    for (let j = horizCount - 1; j >= 1; j--) {
        line = line +' *' + ('   '.repeat(j)) + '*\n';
    }
    return (`${str}\n${line} ${star}`);
}