import {IGallery} from "./IGallery";
import {renderImage} from "./renderImage";
import {renderBigPhoto} from "./renderBigPhoto";
import {setImageToSlide} from "./setImageToSlide";

export class Gallery implements IGallery{
  getImages() {
    const bigPhoto = document.getElementById('big-photo');

    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        bigPhoto.setAttribute('src', `${data[0].url}`);
        const images = data.slice(0, 20);
          images.forEach(img => renderImage(img.url, img.id));
      });
  }

  getBigImage(): void {
    const photos = document.getElementById('photos');
    photos.addEventListener('click', (event) => renderBigPhoto(event))
  }

  onZoomImage(): void {
    const gallery = document.querySelectorAll('.gallery__slider--photo')
    gallery.forEach(i => {
      i.addEventListener('mouseover', () => {
        i.classList.add('zoom');
      });
      i.addEventListener('mouseout', () => {
        i.classList.remove('zoom');
      });
    });
  }

  onSliderShow(): void {
    const btn = document.getElementById('open-modal');
    const modal = document.getElementById('modal');
    btn.addEventListener('click', () => {
      setImageToSlide();
      modal.classList.remove('hide');
    });
  }

  offSlideShow(): void {
    const btnClose = document.getElementById('close');
    const modal = document.getElementById('modal');
    btnClose.addEventListener('click', () => {
      modal.classList.add('hide')
    });
  }
}
