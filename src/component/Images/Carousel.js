import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const count = 27
const images = Array.from({ length: count }, (_, i) => ({
  original: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (${i}).jpg?raw=true`,
  thumbnail: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (${i})_tn.jpg?raw=true`,
}));
const videos = [
  {
    original: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/shareFiji.mp4?raw=true`,
    thumbnail: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (1)_tn.jpg?raw=true`,
  }
]

const items = [...images, ...videos];

class Carousel extends React.Component {
  render() {
    return <ImageGallery items={items} />;
  }
}

export default Carousel;