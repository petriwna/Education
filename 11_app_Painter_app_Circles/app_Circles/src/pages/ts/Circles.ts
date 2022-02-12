import {MAX_RADIUS, MAX_SPEED, MIN_RADIUS, MIN_SPEED} from "./constants";

export class Circles{
  drawCircle(event){
    const circles = document.createElement("circle");
    circles.setAttribute("cx","20");
    circles.setAttribute("cy","20");
    circles.setAttribute("style",`fill: none; stroke: blue; stroke-width: 1px;`);
    circles.setAttribute("r",`${this.createCircle().radius}`);
    event.target.appendChild(circles);
  }

  createCircle(){
    const radius = Math.floor(Math.random() * MAX_RADIUS + MIN_RADIUS);
    const angle = Math.random() * 2 * Math.PI;
    const dx = Math.cos(angle);
    const dy = Math.sin(angle);
    const speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
    const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    return { dx, dy, radius, color, speed };
  }
}
