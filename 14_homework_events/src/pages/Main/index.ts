import "./styles.scss"
import {Gallery} from "../ts/Gallery";

function init() {
  const gallery = new Gallery()
  gallery.getImages();
  gallery.getBigImage();
  gallery.onZoomImage();
  gallery.onSliderShow();
  gallery.offSlideShow();
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
