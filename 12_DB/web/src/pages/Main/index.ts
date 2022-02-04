import "./styles.scss"
import {Person} from "../ts/Person";

function init() {
  const person = new Person();
  person.getTablePerson();
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
