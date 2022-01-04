module.exports = twoFigure;

function twoFigure() {
    const horizCount = 5;
    const vertCount = 6;
    const str = '*  '.repeat(7);
    let str2 = '';

    for (let i = 0; i < vertCount - 1; ++i) {
        str2 = str2 + '*' + ('   '.repeat(horizCount)) + '  *\n' ;
    }
    return `${str}\n${str2}${str}`;
}
