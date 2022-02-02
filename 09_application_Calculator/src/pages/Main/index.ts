import "./styles.scss"
import {Calculator} from "./Calculator";
import {handleBtnClick} from "./handlerBtnClick";
import {handleDisplayUpdate} from "./handleDisplayUpdate";

function init() {
  const calc = new Calculator;
  const calcButton = document.querySelectorAll('button');
  calcButton.forEach(btn => btn.addEventListener('click', handleBtnClick));
  handleDisplayUpdate("96");
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
