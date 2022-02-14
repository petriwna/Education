export function renderTableCandidate(column, candidate){
  const lineName = document.querySelectorAll('.name');
  const lineBalance = document.querySelectorAll('.balance');
  const lineAge = document.querySelectorAll('.age');
  const lineDoc = document.querySelectorAll('.doc');
  const lineLevel = document.querySelectorAll('.level');

console.log(candidate)
  lineName[column].textContent = candidate.name;
  lineBalance[column].textContent = candidate.balance;
  lineAge[column].textContent = candidate.age;
  lineDoc[column].textContent = candidate.doc;
  lineLevel[column].textContent = candidate.level;
}
