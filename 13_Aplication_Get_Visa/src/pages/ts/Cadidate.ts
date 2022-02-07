import {ICandidate} from "./ICandidate";

export class Candidate implements ICandidate {

  getRandomAge(el): number {
    let random = 0;
    if (Math.random() > 0.3) {
      random = Math.floor(Math.random() * (60 - 18 + 1) + 18);
    } else {
      random = Math.floor(Math.random() * (90 - 60 + 1) + 60)
    }
    return el.value = random
  }

  getRandomBalance(el): number {
    let random = 0;
    if (Math.random() > 0.4) {
      random = Math.floor(Math.random() * 20001);
    } else {
      random = Math.floor(Math.random() * 2000);
    }
    return el.value = random;
  }

  getRandomDocument(el): number {
    let random = 0;
    if (Math.random() > 0.2) {
      random = 3;
    } else {
      random = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    }
    return el.value = random;
  }

  getRandomEnglishLevel(el): string {
    const english = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', ];
    let random = 0;
    if (Math.random() > 0.3) {
      random = 2 || 3 || 4;
    } else {
      random = Math.ceil(Math.random() * 5);
    }
    return el.value = english[random];
  }

  getRandomName(el): string {
    const names = ['Yuliia', 'Slava', 'Yehor', 'Viktoriia', 'Dima', 'Iryna', 'Natasha', 'Oleksandr', 'Lesya', 'Anton'];
    const random = Math.floor(Math.random() * 10);
    return el.value = names[random];
  }
}
