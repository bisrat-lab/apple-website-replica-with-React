import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const count = 27
const images = Array.from({ length: count }, (_, i) => ({
  original: `./src/images/fiji/history/FijiHistory (${i}).jpg`,
  thumbnail: `./src/images/fiji/history/FijiHistory (${i})_tn.jpg`,
}));

class Carousel extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Carousel;