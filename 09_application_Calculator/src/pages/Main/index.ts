import "./styles.scss"
import {handleBtnClick} from "./ts/handlerBtnClick";
import {handleDisplayUpdate} from "./ts/handleDisplayUpdate";

function init() {
  const calcButton = document.querySelectorAll('button');
  calcButton.forEach(btn => btn.addEventListener('click', handleBtnClick));
  handleDisplayUpdate("4555555");
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
