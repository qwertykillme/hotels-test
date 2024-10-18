import { useState } from "react";
import styles from "./styles.module.scss";
import ImageZoomModal from "../ImageZoomModal/ImageZoomModal";
interface IAccordionCardProps {
  imageSrc: string;
  itemsList?: string[];
  children?: React.ReactNode;
}

const AccordionCard: React.FC<IAccordionCardProps> = ({
  imageSrc,
  itemsList,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImgClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  let randomassId = 1;

  return (
    <section className={styles.container}>
      <div className={styles.imgwrapper}>
        <img src={imageSrc} className={styles.image} onClick={handleImgClick} alt="картиночка"/>
      </div>

      {children && <div className={styles.children}>{children}</div>}

      {itemsList && (
        <ul className={styles.list}>
          {itemsList.map((listItem, index) => (
            <li key={`${randomassId++}-${index}`}> {listItem} </li>
          ))}
        </ul>
      )}

      {isModalOpen && (
        <ImageZoomModal imageSrc={imageSrc} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default AccordionCard;
