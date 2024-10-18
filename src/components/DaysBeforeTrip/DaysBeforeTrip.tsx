import {
  selectCurrentHotel,
  selectCurrentRoom,
  selectDaysBeforeCheckout,
  setCurrentHotel,
  setCurrentRoom,
  setDaysBeforeCheckout,
} from "@redux/slices/currentTripSlice";
import styles from "./styles.module.scss";

interface DaysBeforeTrip {
  hotelName: string;
  room: number;
  daysBeforeCheckout: string | number;
}

const DaysBeforeTrip: React.FC<DaysBeforeTrip> = ({
  hotelName,
  room,
  daysBeforeCheckout,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}> {hotelName} </span>
      <div className={styles.wrapperInfo}>
        <span className={styles.numberBlock}> Номер <span className={styles.number}> {room} </span></span>
        <span className={styles.subtext}>  До выезда <span className={styles.day}>{daysBeforeCheckout} </span> { daysBeforeCheckout == 1 ? "сутки" : "суток" } </span>

      </div>
    
    </div>
  );
};

export default DaysBeforeTrip;
