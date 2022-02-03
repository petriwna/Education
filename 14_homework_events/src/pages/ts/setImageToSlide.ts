export function setImageToSlide(){
  const gallery = document.querySelectorAll('.gallery__slider--photo');
  const container = document.getElementById('all-image');
  let i = 1;
  setInterval(() => {
    i++;
    const srcImage = gallery[i].getAttribute('src');
    container.setAttribute('src', `${srcImage}`);
    console.log(`${i}`)
    if (i === gallery.length - 1) {
      i = 0;
    }
  }, 2000);
}
