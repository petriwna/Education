export function renderImage(url, id){
  document.getElementById(`${id}`).setAttribute('src', `${url}`);
}
