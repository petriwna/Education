export function checkInputValue(name, balance, age, doc, level, el) {
  if (name.value !== '' && balance.value !== '' && age.value !== '' && doc.value !== '' && level.value !== '') {
    el.disabled = false;
  } else {
    el.disabled = true;
  }
  console.log(name.value)
}
