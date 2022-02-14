import {IVisa} from "./IVisa";
import {Person} from "./Person";
import {checkInputValue} from "./checkInputValue";
import {renderTableCandidate} from "./renderTableCandidate";

export class Visa implements IVisa {
  candidates;
  constructor() {
    this.candidates = [];
  }

  generateData(): void {
    const candidate = new Person();
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
    // @ts-ignore
    const name: HTMLInputElement = document.getElementById('name');
    // @ts-ignore
    const balance: HTMLInputElement = document.getElementById('balance');
    // @ts-ignore
    const age: HTMLInputElement = document.getElementById('age');
    // @ts-ignore
    const doc: HTMLInputElement = document.getElementById('document');
    // @ts-ignore
    const level: HTMLInputElement = document.getElementById('english');
    let column = 0;
    const btnGenerateAll = <HTMLButtonElement>document.getElementById('generate_all');

    btnAdd.addEventListener('click', () => {

      const candidate = {name: name.value, balance: balance.value, age: age.value, doc: doc.value, level: level.value}

      if (this.candidates.length === 5) {
        btnAdd.disabled = true;
        race.disabled = false;
        btnGenerateAll.disabled = true;
        btnsGener.forEach(el => {
          el.disabled = true;
        });
      } else {
        btnAdd.disabled = false;
        this.candidates.push(candidate)
        console.log(this.candidates)
        renderTableCandidate(column++, candidate);
      }
      name.value = '';
      balance.value = '';
      age.value = '';
      doc.value = '';
      level.value = '';
    });
  }

}
