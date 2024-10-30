import { useState } from "react";
import styles from "./styles.module.scss";
import ImageZoomModal from "../ImageZoomModal/ImageZoomModal";
interface IAccordionCardProps {
  title?: string,
  imageSrc: string;
  children?: React.ReactNode;
  shortDescription?: string;
}

const AccordionCard: React.FC<IAccordionCardProps> = ({
  imageSrc,
  shortDescription,
  children,
  title='Описание'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImgClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.imgwrapper}>
        <img src={imageSrc} className={styles.image} onClick={handleImgClick} alt="картиночка"/>
      </div>

      {children && <div className={styles.children}>{children}</div>}
      <div className={styles.description}>
        <h4 className={styles.description_title}>{title}</h4>
        <div className={styles.description_info}> {shortDescription} </div>
      </div>

      {isModalOpen && (
        <ImageZoomModal imageSrc={imageSrc} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default AccordionCard;
