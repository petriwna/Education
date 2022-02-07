import {IVisa} from "./IVisa";
import {Candidate} from "./Cadidate";
import {checkInputValue} from "./checkInputValue";

export class Visa implements IVisa {

  generateData(): void {
    const candidate = new Candidate();
    const name: HTMLElement = document.getElementById('name');
    const balance = document.getElementById('balance');
    const age = document.getElementById('age');
    const doc = document.getElementById('document');
    const level = document.getElementById('english');

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
    });

    const btnAdd = <HTMLButtonElement>document.getElementById('add_candidate');
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
    // const btnAdd = document.getElementById('add_candidate');
    // const inputs:HTMLInputElement = document.querySelectorAll('input');
    //
    // btnAdd.addEventListener('click', () => {
    //   if (inputs.value === ''){
    //     btnAdd.disable
    //   }
    // });
  }

  checkInputValue(name, balance, age, doc, level, el) {
    if (name.value === '' && balance.value === '' && age.value === '' && doc.value === '' && level.value === '') {
      el.disabled = true;
    } else{
      el.disabled = false;
    }
  }
}
