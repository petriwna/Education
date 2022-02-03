import "./styles.scss"
import {renderImage} from "../ts/renderImage";
import {Gallery} from "../ts/Gallery";

function init() {
  const gallery = new Gallery()
  gallery.getImage();
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});
