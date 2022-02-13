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
    const canvasContet = canvas.toDataURL();
    const data = {image: canvasContet, data: Date.now()};
    const string = JSON.stringify(data);
    const file = new Blob([string], {
      type: 'application/json'
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = 'data.json';
    body.appendChild(a);
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
