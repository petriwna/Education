import {IPerson} from "./IPerson";
import {renderTable} from "./renderTable";

export class Person implements IPerson{

  renderTablePerson() {
    return fetch("/person")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  getTablePerson(): void {
  }
}
