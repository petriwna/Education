import "./styles.scss"
import {Visa} from "../ts/Visa";

function init() {
  const visa = new Visa();

  visa.generateData();
  visa.showCandidate();
  visa.addCandidate()
}

window.addEventListener('DOMContentLoaded', () => {
  init();
});
