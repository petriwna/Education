export function renderBigPhoto(event){
  const img = event.target
  const bigPhoto = document.getElementById('big-photo');
  bigPhoto.setAttribute('src', `${img.src}`);
}
