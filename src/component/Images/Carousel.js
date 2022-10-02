import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const count = 26
const images = Array.from({ length: count }, (_, i) => ({
  original: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (${i+1}).jpg?raw=true`,
  thumbnail: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (${i+1})_tn.jpg?raw=true`,
}));

class Carousel extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Carousel;