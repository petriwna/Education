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