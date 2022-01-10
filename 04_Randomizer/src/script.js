const {
    addListener,
    getInputValue,
    setInputValue,
    setHTMLValue,
    setDisable
} = require('./utils')

function generateNumber(state) {
    const start = setInputValue('inp-min-num');
    const end = setInputValue('inp-max-num');
    if (!validation(start, end)){
        state.startNumber = start;
        state.endNum = end;
    } else {
        setHTMLValue('error-message', 'Не коректное значение!');
        resetForm(state)
    }

    getArrRandom(state);
    setHTMLValue('get-number', getRandom(state));
    console.log(state);

}

function resetForm(state) {
    state.startNumber = 1;
    state.endNum = 5;
    state.randomNumber = 0;
    state.randomArray = [];
    console.log('reset')
}

function validation(start, end) {
    if (isNaN(start) || isNaN(end) || start > end) {
        return false;
    }
    return true;
}

function getRandom(state) {
    if (state.randomArray.length !== 0) {
        const index = (state.randomArray.length === 1) ? 0 : Math.round(Math.random() * state.randomArray.length)
        state.randomNumber = state.randomArray[index];
        state.randomArray.splice(index, 1);
        return state.randomNumber;
    } else {
        setDisable('btn-generate');
        showMessage();
    }
}

function getArrRandom(state) {
    state.randomArray = [];
    for (let i = state.startNumber; i <= state.endNum; i++) {
        state.randomArray.push(i);
    }
    return state;
}

function showMessage() {
    return setHTMLValue('get-number', 'Закончились варианты!');
}

document.addEventListener('DOMContentLoaded', function () {
    init();
});

function init() {
    const state = {
        startNumber: 1,
        endNum: 5,
        randomNumber: 0,
        randomArray: []
    }

    addListener('btn-generate', 'click', generateNumber.bind(null, state));
    addListener('btn-reset', 'click', resetForm.bind(null, state));
}

// module.exports = {validation, getArrRandom, getRandom}