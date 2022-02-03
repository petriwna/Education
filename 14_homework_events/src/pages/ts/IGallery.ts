export interface IGallery{
  getImages: () => void
  getBigImage: () => void
  onZoomImage: () => void
  onSliderShow: () => void
  offSlideShow: () => void
}
