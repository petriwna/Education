import "./styles.scss"
function init() {
  getImage();
}
function getImage(){
  fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((response) => response.json())
    .then((json) => renderImage(json));
}

function renderImage(json: any) {
  const imgContainer = document.getElementById('item');

  imgContainer.innerHTML = `<img src="${json.url}" class="gallery__img"/>`
  console.log(json)
  return imgContainer;
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
