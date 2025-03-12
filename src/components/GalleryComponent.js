import React, { useState, useEffect, memo } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery-bundle.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import urid from "urid";
import styles from "../styles/App.module.css";

const GalleryComponent = () => {
  const [listOfImages, setListOfImages] = useState([]);

  useEffect(() => {
    try {
      const importAll = (r) => r.keys().map(r);
      const images = importAll(
        require.context("../assets/images/", false, /\.(png|jpe?g)$/)
      );
      console.log("Loaded images:", images);
      setListOfImages(images);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  }, []);

  const handleImageLoad = (e) => {
    e.target.classList.add(styles.loaded);
  };

  if (listOfImages.length === 0) {
    return <div className={styles.loading}>Загрузка изображений...</div>;
  }

  return (
    <LightGallery
      onInit={() => console.log("LightGallery has been initialized.")}
      speed={500}
      plugins={[lgThumbnail, lgZoom, lgAutoplay, lgShare, lgFullscreen]}
    >
      {listOfImages.map((image) => (
        <a className={styles.galleryItem} key={urid()} href={image}>
          <img
            src={image}
            className={styles.thumb}
            alt="Children's Summer Camp 'Aurora'"
            loading="lazy"
            onLoad={handleImageLoad} // Плавное появление после загрузки
          />
        </a>
      ))}
    </LightGallery>
  );
};

export default memo(GalleryComponent);
