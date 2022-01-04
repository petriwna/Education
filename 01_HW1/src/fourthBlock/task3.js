module.exports = {numToStr999, hundreds, decades, teens};

function numToStr999(num) {
    let str = '';
    const arrNum = num.toString().split('');

    if (arrNum.length === 3) {
        if (arrNum[1] === '1') {
            str = (hundreds(arrNum[0]) + ' ' + teens(arrNum[2]));
        } else if (arrNum[1] === '0' && arrNum[2] === '0') {
            str = (hundreds(arrNum[0]))
        } else if (arrNum[2] === '0') {
            str = (hundreds(arrNum[0]) + ' ' + decades(arrNum[1]));
        } else if (arrNum[1] === '0') {
            str = (hundreds(arrNum[0]) + ' ' + units(arrNum[2]))
        } else {
            str = (hundreds(arrNum[0]) + ' ' + decades(arrNum[1]) + ' ' + units(arrNum[2]));
        }
    } else if (arrNum.length === 2) {
        if (arrNum[0] === '1') {
            str = (teens(arrNum[1]));
        } else {
            str = (decades(arrNum[0]) + ' ' + units(arrNum[1]));
        }
    } else if (arrNum.length === 1) {
        if (arrNum[0] === '0') {
            str = 'ноль';
        } else {
            str = (units(arrNum[0]));
        }
    } else {
        str = 'Что-то пошло не так!';
    }
    return str;
}

function units(num) {
    switch (num) {
        case '0':
            return '';
        case '1':
            return 'один';
        case '2':
            return 'два';
        case '3':
            return 'три';
        case '4':
            return 'четыре';
        case '5':
            return 'пять';
        case '6':
            return 'шесть';
        case '7':
            return 'семь';
        case '8':
            return 'восемь';
        case '9':
            return 'девять';
        default:
            return 'Что-то пошло не так';
    }
}

function decades(num) {
    switch (num) {
        case '1':
            return 'десять';
        case '2':
            return 'двадцать';
        case '3':
            return 'тридцать';
        case '4':
            return 'сорок';
        case '5':
            return 'пятьдесят';
        case '6':
            return 'шестьдесят';
        case '7':
            return 'семьдесят';
        case '8':
            return 'восемьдесят';
        case '9':
            return 'девяносто';
        default:
            return 'Что-то пошло не так';
    }
}

function hundreds(num) {
    switch (num) {
        case '1':
            return 'сто';
        case '2':
            return 'двести';
        case '3':
            return 'триста';
        case '4':
            return 'четыреста';
        case '5':
            return 'пятьсот';
        case '6':
            return 'шестьсот';
        case '7':
            return 'семьсот';
        case '8':
            return 'восемьсот';
        case '9':
            return 'девятьсот';
        default:
            return 'Что-то пошло не так';
    }
}




function teens(num) {
    let str = '';
    if (num === '0') return 'десять'
    switch (num) {
        case '1':
            str = 'один';
            break;
        case '2':
            str = 'две';
            break;
        case '3':
            str = 'три';
            break;
        case '4':
            str = 'четыр';
            break;
        case '5':
            str = 'пят';
            break;
        case '6':
            str = 'шест';
            break;
        case '7':
            str = 'сем';
            break;
        case '8':
            str = 'восем';
            break;
        case '9':
            str = 'девят';
            break;
        default:
            str = 'Что-то пошло не так';
    }
    return str + 'надцать';
}


console.log(numToStr999(80));