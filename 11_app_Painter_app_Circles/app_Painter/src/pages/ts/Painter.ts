export class Painter {
  canvas: HTMLCanvasElement
  prevX: number
  prevY: number
  draw: Boolean

  constructor(canvas) {
    this.canvas = canvas;
    this.draw = false;
    this.prevX = null;
    this.prevY = null;
  }

  drawLine(e, ctx) {
    if (this.prevX == null || this.prevY == null || !this.draw) {
      this.prevX = e.clientX
      this.prevY = e.clientY
      return
    }
    let currentX = e.clientX
    let currentY = e.clientY
    ctx.beginPath()
    ctx.moveTo(this.prevX, this.prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
    this.prevX = currentX
    this.prevY = currentY
  }

  saveImage(canvas, body) {
    const a = document.createElement('a');
    body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = 'canvas-img.json';
    a.click();
    body.removeChild(a);
  }

  pickColor(ctx, tempColor) {
    ctx.strokeStyle = tempColor;
  }

  pickThickness(ctx, tempThickness) {
    ctx.lineWidth = tempThickness;
  }
}
