import "./styles.scss"
import {addListener} from "./utill";
import {Calculator} from "./Calculator";

document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  const calc = new Calculator;

  addListener('clear', 'click', calc.clearAll);
}


