const result = document.getElementById('get-number');
let btnGenerate = document.getElementById('btn-generate');
let btnReset = document.getElementById('btn-reset');
let min = document.getElementById('inp-min-num').value;
let max = document.getElementById('inp-max-num').value;

btnGenerate.addEventListener('click', generateNumber);
btnReset.addEventListener('click', resetRandom);
result.addEventListener('input', setResult);

function generateNumber(){

}

function resetRandom(){

}

function setResult(){

}

function getRandom(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}