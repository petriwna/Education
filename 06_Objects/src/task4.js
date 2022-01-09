module.exports = countCharacters;

function countCharacters(string) {
    let arr = string.replace(/[&\/\\#\s,+()$~%.'":*!<>{}]/g, '').split('');

    function toNum(s) {
        let num = Number(s);
        if (isNaN(num)) return s;
        else return num;
    }

    return arr.reduce((acc, item) => {
        acc[toNum(item)] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}