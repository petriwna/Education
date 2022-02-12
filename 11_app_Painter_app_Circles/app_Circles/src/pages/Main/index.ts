import "./styles.scss"
import {Circles} from "../ts/Circles";

function init(){
  const circles = new Circles();
  const svg = document.getElementById('svg');
  svg.addEventListener('click', (event) => {
    circles.drawCircle(event);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  init();
});
