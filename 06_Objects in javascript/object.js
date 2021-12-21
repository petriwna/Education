//------------------------1---------------------
function getCookingTime(eggsAmount) {
    return Math.ceil(eggsAmount / 5) * 5;
}

//------------------------2---------------------
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

//------------------------3---------------------
function findTitle(array, string) {
    let str = string.toLowerCase();
    let title = array.filter(obj =>
        Object.keys(obj).some(keys =>
            keys.includes('title')));

    return  title.filter(obj =>
        Object.values(obj).some(value =>
            value.toLowerCase().includes(str)));
}

let arr = [{
    title: 'Some title 1'
},{
    title: 'I like JS'
},{
    user: 'This obj doesn\'t have key title js'
},{
    title: 'Js - is the best!'
}];
//------------------------4---------------------
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

//------------------------5---------------------
function palindrome(num) {
    num = '' + num;
    if (num.length < 2) return false;
    for (let i = 0; i < num.length / 2; i++) {
        if (num[i] !== num[num.length - (i + 1)])
            return false
    }
    return true;
}

function getNextPalindrome(number) {
    let result = number;
    while (!palindrome(++result)) {
    }
    return result;
}