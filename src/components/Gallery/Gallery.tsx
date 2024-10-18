import { useState } from "react";
import ImageZoomModal from "../ImageZoomModal/ImageZoomModal";
import styles from "./styles.module.scss";
import ImageZoomCarousel from "../ImageZoomCarousel/ImageZoomCarouse";

interface IGalleryProps {
  title: string;
  images: string[]; // Массив путей к картинкам
}

const Gallery: React.FC<IGalleryProps> = ({ title, images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div className={styles.galleryContainer}>
      {title && <h3 className={styles.title}> {title} </h3>}
      <div className={styles.imagesContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => handleClick(index)}
          >
            <img src={image} className={styles.image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <ImageZoomCarousel
          images={images}
          initIndex={selectedIndex}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Gallery;
