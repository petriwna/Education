import {IGallery} from "./IGallery";
import {renderImage} from "./renderImage";

export class Gallery implements IGallery{
  getImage() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        const images = data.slice(0, 20);
          images.forEach(img => renderImage(img.url, img.id));
      });
  }

  showAllImage(): void {
  }

}
