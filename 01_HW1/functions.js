//1.	Получить строковое название дня недели по номеру дня. 
function firstTask(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const result = days[date];
}

//firstTask(4);

//2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function secondTask(x1, y1, x2, y2) {
    const result = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    return Math.floor(result);
}

//3.	Вводим число(0-999), получаем строку с прописью числа.
function thirdTask(num) {
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
        return console.log(str);
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

    function teens(num) {
        var str = '';
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
    numToStr999(num);
}

//4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function fourdTask(str) {

    function strToNum999(str) {
        let num = '';
        let arrStr = str.split(' ');

        if (arrStr.length === 3) {
            num = (Number(numbers(arrStr[0])) + Number(numbers(arrStr[1])) + Number(numbers(arrStr[2])));
        } else if (arrStr.length === 2) {
            num = (Number(numbers(arrStr[0])) + Number(numbers(arrStr[1])));
        } else if (arrStr.length === 1) {
            num = (Number(numbers(arrStr[0])));
        } else {
            num = 'Что-то пошло не так!';
        }
        return console.log(num);
    }

    function numbers(num) {
        switch (num) {
            case '0':
                return '';
            case 'один':
                return '1';
            case 'два':
                return '2';
            case 'три':
                return '3';
            case 'четыре':
                return '4';
            case 'пять':
                return '5';
            case 'шесть':
                return '6';
            case 'семь':
                return '7';
            case 'восемь':
                return '8';
            case 'девять':
                return '9';
            case 'десять':
                return '10';
            case 'одинадцать':
                return '11';
            case 'двенадцать':
                return '12';
            case 'тринадцать':
                return '13';
            case 'четырнадцать':
                return '14';
            case 'пятнадцать':
                return '15';
            case 'шестнадцать':
                return '16';
            case 'семнадцать':
                return '17';
            case 'восемнадцать':
                return '18';
            case 'девятнадцать':
                return '19';
            case 'двадцать':
                return '20';
            case 'тридцать':
                return '30';
            case 'сорок':
                return '40';
            case 'пятьдесят':
                return '50';
            case 'шестьдесят':
                return '60';
            case 'семьдесят':
                return '70';
            case 'восемьдесят':
                return '80';
            case 'девяносто':
                return '90';
            case 'сто':
                return '100';
            case 'двести':
                return '200';
            case 'триста':
                return '300';
            case 'четыреста':
                return '400';
            case 'пятсот':
                return '500';
            case 'шестьсот':
                return '600';
            case 'семьсот':
                return '700';
            case 'восемьсот':
                return '800';
            case 'девятьсот':
                return '900';
            default:
                return 'Что-то пошло не так';
        }
    }
    strToNum999(str);
}

