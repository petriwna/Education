module.exports = findTitle;

function findTitle(array, string) {
    let str = string.toLowerCase();
    let title = array.filter(obj =>
        Object.keys(obj).some(keys =>
            keys.includes('title')));

    return  title.filter(obj =>
        Object.values(obj).some(value =>
            value.toLowerCase().includes(str)));
}