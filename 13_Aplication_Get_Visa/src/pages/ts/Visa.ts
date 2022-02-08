import {IVisa} from "./IVisa";
import {Candidate} from "./Cadidate";
import {checkInputValue} from "./checkInputValue";
import {renderTableCandidate} from "./renderTableCandidate";

export class Visa implements IVisa {

  generateData(): void {
    const candidate = new Candidate();
    const name: HTMLElement = document.getElementById('name');
    const balance = document.getElementById('balance');
    const age = document.getElementById('age');
    const doc = document.getElementById('document');
    const level = document.getElementById('english');
    const btnAdd = <HTMLButtonElement>document.getElementById('add_candidate');

    const btnName = document.getElementById('name_generate')
    btnName.addEventListener('click', () => candidate.getRandomName(name));

    const btnBalance = document.getElementById('balance_generate');
    btnBalance.addEventListener('click', () => candidate.getRandomBalance(balance));

    const btnAge = document.getElementById('age_generate');
    btnAge.addEventListener('click', () => candidate.getRandomAge(age));

    const btnDoc = document.getElementById('document_generate');
    btnDoc.addEventListener('click', () => candidate.getRandomDocument(doc));

    const btnLevel = document.getElementById('english_generate');
    btnLevel.addEventListener('click', () => candidate.getRandomEnglishLevel(level));

    const btnGenerateAll = document.getElementById('generate_all');
    btnGenerateAll.addEventListener('click', () => {
      candidate.getRandomName(name);
      candidate.getRandomBalance(balance);
      candidate.getRandomAge(age);
      candidate.getRandomDocument(doc);
      candidate.getRandomEnglishLevel(level);
      btnAdd.disabled = false;
    });

    btnAdd.disabled = true;
    const inputs = document.querySelectorAll('input');
    inputs.forEach(el => {
      el.addEventListener('change', () => checkInputValue(name, balance, age, doc, level, btnAdd));
    });

    const race = <HTMLButtonElement>document.getElementById('race');
    race.disabled = true;
  }

  showCandidate() {
    const table = document.getElementById('table');
    const btnInit = document.getElementById('init');
    btnInit.addEventListener('click', () => table.classList.toggle('hide'));
  }

  addCandidate() {
    const btnAdd = <HTMLButtonElement>document.getElementById('add_candidate');
    const race = <HTMLButtonElement>document.getElementById('race');
    const btnsGener: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.generate');
    const name: HTMLElement = document.getElementById('name');
    const balance = document.getElementById('balance');
    const age = document.getElementById('age');
    const doc = document.getElementById('document');
    const level = document.getElementById('english');
    let column = 0

    btnAdd.addEventListener('click', () => {
      // if (candidates === 5) {
      //   btnAdd.disabled = true;
      //   race.disabled = false;
        btnsGener.forEach(el => {
          el.disabled = true;
        });
      // }
      renderTableCandidate(column++, name, balance, age, doc, level)

    });
  }

}
