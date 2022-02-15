export function renderBigPhoto(event){
  const bigPhoto = document.getElementById('big-photo');
  bigPhoto.setAttribute('src', `${event.target.src}`);
}
