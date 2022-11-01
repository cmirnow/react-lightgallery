import LightGallery from "lightgallery/react";
import ImagesComponent from "./components/ImagesComponent";
import Background from "./Background"
import Footer from "./Footer";
import "lightgallery/css/lightgallery-bundle.css";
import "./App.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";
import lgFullscreen from "lightgallery/plugins/fullscreen";

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="Gallery">
      <h1 className="font-face-ps">Children's Summer Camp 'Aurora'</h1>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgShare, lgFullscreen]}
      >
        <ImagesComponent />
      </LightGallery>
      <Footer />
      <Background />
    </div>
  );
}

export default Gallery;
