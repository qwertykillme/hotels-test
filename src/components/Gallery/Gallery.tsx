import { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx"; // Для объединения классов
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

  const limitedImages = images.slice(0, 4);
  const showOverlay = images.length > 4; 

  return (
    <div className={styles.galleryContainer}>
      {title && <h2 className={styles.title}> {title} </h2>}
      <div className={clsx(styles.imagesContainer, {
        [styles.empty] : !images.length
      })}>
        {!images?.length && 'В галерее пока пусто...'}
        {limitedImages.map((image, index) => (
          <div
            key={index}
            className={clsx(styles.imageWrapper, {
              [styles.moreImagesOverlay]: showOverlay && index === 3, 
            })}
            onClick={() => handleClick(index)}
          >
            <img src={image} className={styles.image} alt={`${index}`} />
            {showOverlay && index === 3 && (
              <div className={styles.overlay}>
                <span>ещё {images.length - 4}...</span>
              </div>
            )}
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
