import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Button from "../Button/Button";

//иконки
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";
import clsx from "clsx";

interface IImageZoomCarouselProps {
  images: string[];
  initIndex: number;
  onClose: () => void;
}

const ImageZoomCarousel: React.FC<IImageZoomCarouselProps> = ({
  images,
  initIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initIndex);
  const [startTouch, setStartTouch] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setStartTouch(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (startTouch === null) return;
    const endTouch = event.touches[0].clientX;
    const deltaX = startTouch - endTouch;

    if (deltaX > 50) {
      handleNext();
      setStartTouch(null);
    } else if (deltaX < -50) {
      handlePrev();
      setStartTouch(null);
    }
  };

  const handleTouchEnd = () => {
    setStartTouch(null);
  };

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "ArrowLeft") {
        handlePrev();
      } else if (evt.key === "ArrowRight") {
        handleNext();
      } else if (evt.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container} onClick={onClose}>
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={clsx(styles.buttons, styles.buttonLeft)}>
          <Button
            text=""
            LeftIcon={ArrowIcon}
            RightIcon={false}
            customLeftIconStyles={{
              transform: "rotate(180deg)",
            }}
            styles={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            onClick={handlePrev}
          />
        </div>

        <img className={styles.image} src={images[currentIndex]} />
        <div className={clsx(styles.buttons, styles.buttonRight)}>
          <Button
            text=""
            RightIcon={ArrowIcon}
            styles={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageZoomCarousel;
