import {IGallery} from "./IGallery";
import {renderImage} from "./renderImage";
import {renderBigPhoto} from "./renderBigPhoto";

export class Gallery implements IGallery{
  getImages() {
    const bigPhoto = document.getElementById('big-photo');
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        bigPhoto.setAttribute('src', `${data[0].url}`)
        const images = data.slice(0, 20);
          images.forEach(img => renderImage(img.url, img.id));
      });
  }

  getBigImage(): void {
    const photos = document.getElementById('photos');
    photos.addEventListener('click', renderBigPhoto)
  }
}
