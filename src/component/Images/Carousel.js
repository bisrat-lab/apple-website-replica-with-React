import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class Carousel extends React.Component {
  
  render() {
    return <ImageGallery items={this.props.items} />;
  }
}

export default Carousel;