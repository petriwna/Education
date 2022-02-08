import "./styles.scss"
import {Calculator} from "./ts/Calculator";
import {updateDisplay} from "./ts/updateDisplay";

function init() {
  const calculator = new Calculator();

  updateDisplay(calculator.displayValue);
  const table = document.getElementById('table');
  table.addEventListener('click', (event) => {
    calculator.handlerButtons(event, calculator.displayValue);
  });
}


document.addEventListener('DOMContentLoaded', function () {
  init();
});
