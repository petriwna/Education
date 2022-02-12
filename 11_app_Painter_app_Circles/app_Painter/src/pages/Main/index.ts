import "./styles.scss"
import {Painter} from "../ts/Painter";

function init() {
  const painter = new Painter();
  // @ts-ignore
  let canvas: HTMLCanvasElement = document.getElementById("canvas")
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  const ctx = canvas.getContext("2d");
  let prevX = null
  let prevY = null
  ctx.lineWidth = 5
  let draw = false
// Set draw to true when mouse is pressed
  canvas.addEventListener("mousedown", (e) => draw = true)
// Set draw to false when mouse is released
  canvas.addEventListener("mouseup", (e) => draw = false)
  canvas.addEventListener("mousemove", (e) => {
    // if draw is false then we won't draw
    if(prevX == null || prevY == null || !draw){
      prevX = e.clientX
      prevY = e.clientY
      return
    }
    let currentX = e.clientX
    let currentY = e.clientY
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
    prevX = currentX
    prevY = currentY
  });

}

window.addEventListener('DOMContentLoaded', () => {
  init();
})
