let inpMinNum = document.getElementById('inp_min_num');
let inpMaxNum = document.getElementById('inp_max_num');
let inpStepGuess = document.getElementById('inp_step_guess');
let btnSave = document.getElementById('save');
let spMaxNum = document.getElementById('max_num');
let spMinNum = document.getElementById('min_num')
let spStepGuess = document.getElementById('step_to_guess')
let inpNum = document.getElementById('input_num');
let btnGenerate = document.getElementById('generate');
let btnExit = document.getElementById('btnExit');


inpMinNum.oninput = function(event){
    spMinNum.innerHTML=event.target.value;
};

inpMaxNum.oninput = function(event){
    spMaxNum.innerHTML=event.target.value;
};

inpStepGuess.oninput = function(event){
    spStepGuess.innerHTML=event.target.value;
};