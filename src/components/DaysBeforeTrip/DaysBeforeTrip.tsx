import styles from "./styles.module.scss";

interface IDaysBeforeTripProps {
  hotelName: string;
  room: number;
  daysBeforeCheckout: string | number;
}

const DaysBeforeTrip: React.FC<IDaysBeforeTripProps> = ({
  hotelName,
  room,
  daysBeforeCheckout,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}> {hotelName} </span>
      <div className={styles.wrapperInfo}>
        <span className={styles.numberBlock}> Номер <span className={styles.number}> {room} </span></span>
        <span className={styles.subtext}>  До выезда <span className={styles.day}>{daysBeforeCheckout} </span> { daysBeforeCheckout === 1 ? "сутки" : "суток" } </span>
      </div>
    </div>
  );
};

export default DaysBeforeTrip;
