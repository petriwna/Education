export function renderImage(url, id, title){
  const image = document.getElementById(`${id}`);
    image.setAttribute('src', `${url}`);
    image.setAttribute('title', `${title}`);
}
