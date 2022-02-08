module.exports = getNumber;

function getNumber(array) {
    let counterOdd = 0;
    let counterEven = 0;
    let result = 0;

    array.forEach(el => {
        if (el % 2 === 0) {
            counterEven = counterEven + 1;
        } else {
            counterOdd = counterOdd + 1;
        }
    });

    if (counterOdd > counterEven) {
        result = array.find(x => x % 2 === 0);
    } else {
        result = array.find(x => x % 2 !== 0);
    }
    return result;
}