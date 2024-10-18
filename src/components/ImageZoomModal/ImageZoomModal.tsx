import { useEffect } from "react";
import styles from "./styles.module.scss";

interface ImageZoomModalProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  imageSrc,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.content}>
        <img src={imageSrc} className={styles.image} />
      </div>
    </div>
  );
};

export default ImageZoomModal;
