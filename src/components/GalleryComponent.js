import React, { Component } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery-bundle.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import urid from "urid";

const onInit = () => {
  console.log("lightGallery has been initialized.");
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfImages: [] };
  }

  importAll(r) {
    return r.keys().map(r);
  }
  componentDidMount() {
    const list = this.importAll(
      require.context("../images/", false, /\.(png|jpe?g)$/)
    );
    this.setState({
      listOfImages: list,
    });
  }
  render() {
    return (
      <>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgShare, lgFullscreen]}
        >
          {this.state.listOfImages.map((image) => (
            <a className="gallery-item" key={urid()} href={image}>
              <img
                src={image}
                className="thumb"
                alt="Children's Summer Camp 'Aurora'"
              ></img>
            </a>
          ))}
        </LightGallery>
      </>
    );
  }
}

export default Gallery;
