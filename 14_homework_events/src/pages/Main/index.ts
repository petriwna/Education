import "./styles.scss"
import {renderImage} from "../ts/renderImage";
import {Gallery} from "../ts/Gallery";

function init() {
  const gallery = new Gallery()
  gallery.getImages();
  gallery.getBigImage();
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
