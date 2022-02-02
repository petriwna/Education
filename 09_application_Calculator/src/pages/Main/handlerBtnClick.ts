declare interface ElementEvent extends Event {
  currentTarget: HTMLElement;
  target: HTMLElement;
}

export function handleBtnClick(e: ElementEvent) {
  const el = e.currentTarget;
  const {
    value,
    type
  } = el.dataset;
  console.log(type + value + ' click button')
}
