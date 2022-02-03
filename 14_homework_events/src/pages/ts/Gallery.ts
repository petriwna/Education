import {IGallery} from "./IGallery";
import {renderImage} from "./renderImage";
import {renderBigPhoto} from "./renderBigPhoto";

export class Gallery implements IGallery{
  getImages() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        const images = data.slice(0, 20);
          images.forEach(img => renderImage(img.url, img.id));
      });
  }

  getBigImage(): void {
    const photos = document.getElementById('photos');
    photos.addEventListener('click', renderBigPhoto)
  }
}
