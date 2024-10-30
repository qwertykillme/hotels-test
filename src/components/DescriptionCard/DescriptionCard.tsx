import Accordion from "@components/Accordion/Accordion";
import InfoHeader from "@components/InfoHeader/InfoHeader";
import { RootState } from "@redux/store/store";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const DescriptionCard = () => {
  const currentHotel = useSelector((state: RootState) => state.currentHotel);
  return (
    <>
      <InfoHeader title={currentHotel.hotel_name} category="Описание" />
      <div className={styles.description_container}>
        <Accordion text="Местонахождение" defaultOpen>

          <div className={styles.description_wrapper}>
            <span>Город:</span>
            <span className={styles.accentFont}>
              {currentHotel.city || "Не задан"}
            </span>
          </div>

          <div className={styles.description_wrapper}>
            <span>Адрес:</span>
            <span className={styles.accentFont}>
              {currentHotel.address || "Не задан"}
            </span>
          </div>
        </Accordion>

        <Accordion text="Справочная информация" defaultOpen>

            <div className={styles.description_wrapper}>
              <span>Количество звезд:</span>{" "}
              <span className={styles.accentFont}>
                {currentHotel.stars || "Неизвестно"}
              </span>
            </div>
            <div className={styles.description_wrapper}>
              <span>Описание:</span>{" "}
              <span className={styles.accentFont}>
                {currentHotel.description || "Не задано"}
              </span>
            </div>

        </Accordion>
        
      </div>
    </>
  );
};

export default DescriptionCard;
