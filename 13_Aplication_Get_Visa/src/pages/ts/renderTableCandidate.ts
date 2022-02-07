export function renderTableCandidate(column, name, balance, age, doc, level){
  const lineName = document.querySelectorAll('.name');
  const lineBalance = document.querySelectorAll('.balance');
  const lineAge = document.querySelectorAll('.age');
  const lineDoc = document.querySelectorAll('.doc');
  const lineLevel = document.querySelectorAll('.level');


  lineName[column].textContent = name.value;
  lineBalance[column].textContent = balance.value;
  lineAge[column].textContent = age.value;
  lineDoc[column].textContent = doc.value;
  lineLevel[column].textContent = level.value;
}
