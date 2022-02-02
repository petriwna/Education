import "./styles.scss"
import {Calculator} from "./Calculator";
import {addListener} from "./utill";


function handleBtnClick() {
  console.log("click button")
}

function init() {
  const calc = new Calculator;

  const calcButton = document.querySelectorAll('button');
  calcButton.forEach(btn => btn.addEventListener('click', handleBtnClick));
  addListener('clear', 'click', calc.clearAll);
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
