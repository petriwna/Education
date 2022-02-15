import "./styles.scss"
import {Circles} from "../ts/Circles";

function init(){
  const circles = new Circles();
  const conteiner = document.getElementById('container');
  conteiner.addEventListener('click', (event) => {
    circles.drawCircle(event);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  init();
});
