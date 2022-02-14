import {FULL_HEIGHT, FULL_WIDTH, MAX_RADIUS, MAX_SPEED, MIN_RADIUS, MIN_SPEED} from "./constants";

export class Circles {
  container: HTMLElement;
  speed: number;

  constructor() {
    this.container = document.getElementById('container');
    this.speed = this.createCircle().speed;
  }

  createSvgElement(elemName) {
    return document.createElementNS('http://www.w3.org/2000/svg', elemName);
  }

  drawCircle(event) {
    const circle = this.createCircle();
    const position = this.getMousePosition(this.container, event);
    const svg = this.createSvgElement('svg');
    svg.setAttribute('width', String((circle.radius) * 2));
    svg.setAttribute('height', String((circle.radius) * 2));
    svg.style.left = `${position.x}px`;
    svg.style.top = `${position.y}px`;
    svg.setAttributeNS(null, 'fill', this.createCircle().color);
    this.container.appendChild(svg);

    const circleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleSvg.setAttributeNS(null, 'r', String(circle.radius));
    circleSvg.setAttributeNS(null, 'cx', String(circle.radius));
    circleSvg.setAttributeNS(null, 'cy', String(circle.radius));
    svg.appendChild(circleSvg);

    let speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
    let nowLeft = svg.getBoundingClientRect().left + (speed / 1000) * circle.dx;
    let nowTop = svg.getBoundingClientRect().top + (speed / 1000) * circle.dy;

    setInterval(function () {
      console.log(nowLeft);
      nowLeft += speed;
      if (nowLeft >= FULL_WIDTH) {
        speed = -speed;
      }
      if (nowLeft <= 0) {
        speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
      }
      svg.style.left = nowLeft + "px";

      nowTop += speed;
      if (nowTop >= FULL_HEIGHT) {
        speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
        speed = -speed;
      }
      if (nowTop <= 0) {
        speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
      }
      svg.style.top = nowTop + "px";
    }, 30);

  }

  getMousePosition(element, event) {
    const rect = this.container.getBoundingClientRect();
    const {clientX, clientY} = event
    return {
      x: clientX - rect.x,
      y: clientY - rect.y
    }
  }

  createCircle() {
    const radius = Math.floor(Math.random() * MAX_RADIUS + MIN_RADIUS);
    const angle = Math.random() * 2 * Math.PI;
    const dx = Math.cos(angle);
    const dy = Math.sin(angle);
    const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    return {dx, dy, radius, color};
  }
}
