import {IVisa} from "./IVisa";
import {Candidate} from "./Cadidate";

export class Visa implements IVisa{
  generateData(): void {
    const candidate = new Candidate();

    const name = document.getElementById('name');
    const btnName = document.getElementById('name_generate')
    btnName.addEventListener('click', () => candidate.getRandomName(name));

    const balance = document.getElementById('balance');
    const btnBalance = document.getElementById('balance_generate');
    btnBalance.addEventListener('click', () => candidate.getRandomBalance(balance));

    const age = document.getElementById('age');
    const btnAge = document.getElementById('age_generate');
    btnAge.addEventListener('click', () => candidate.getRandomAge(age));

    const doc = document.getElementById('document');
    const btnDoc = document.getElementById('document_generate');
    btnDoc.addEventListener('click', () => candidate.getRandomDocument(doc));

    const level = document.getElementById('english');
    const btnLevel = document.getElementById('english_generate');
    btnLevel.addEventListener('click', () => candidate.getRandomEnglishLevel(level));

    const btnGenerateAll = document.getElementById('generate_all');
    btnGenerateAll.addEventListener('click', () => {
      candidate.getRandomName(name);
      candidate.getRandomBalance(balance);
      candidate.getRandomAge(age);
      candidate.getRandomDocument(doc);
      candidate.getRandomEnglishLevel(level);
    })
  }

}
