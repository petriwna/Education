import "./styles.scss"
import {handleBtnClick} from "./ts/handlerBtnClick";
import {Calculator} from "./ts/Calculator";

function init() {
  const calc = new Calculator;
  const calcButton = document.querySelectorAll('button');
  calcButton.forEach(btn => btn.addEventListener('click', handleBtnClick));
  calc.handleDisplayUpdate('0');
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
