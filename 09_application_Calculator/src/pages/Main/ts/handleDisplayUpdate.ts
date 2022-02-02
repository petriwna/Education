export function handleDisplayUpdate(val: string){
  const display: HTMLElement = document.getElementById('display');
  display.innerText = val ? val : '0';
}
