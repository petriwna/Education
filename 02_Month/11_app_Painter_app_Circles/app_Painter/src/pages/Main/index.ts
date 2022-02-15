import "./styles.scss"
import {Painter} from "../ts/Painter";

function init() {
  // @ts-ignore
  let canvas: HTMLCanvasElement = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 5;
  const painter = new Painter(canvas);
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth

  canvas.addEventListener("mousedown", (e) => painter.draw = true);
  canvas.addEventListener("mouseup", (e) => painter.draw = false);
  canvas.addEventListener("mousemove", (e) => {
   painter.drawLine(e, ctx);
  });

  // @ts-ignore
  const color: HTMLInputElement = document.getElementById('color');
  color.addEventListener('change', () => {
    painter.pickColor(ctx, color.value);
  });

  // @ts-ignore
  const slider:HTMLInputElement = document.getElementById('slider');
  slider.addEventListener('change', () => {
    painter.pickThickness(ctx, slider.value);
  });

  const btn = document.getElementById('save');
  btn.addEventListener('click', () => {
    painter.saveImage(canvas, document.body);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  init();
})
