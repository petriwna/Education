export class Painter{
  saveImage(canvas, body) {
    const a = document.createElement('a');
    body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = 'canvas-img.json';
    a.click();
    body.removeChild(a);
  }
}
