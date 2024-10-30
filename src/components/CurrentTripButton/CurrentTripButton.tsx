import styles from "./styles.module.scss";

import { useNavigate } from "react-router-dom";


//иконки
import { ReactComponent as BellIcon } from "@/assets/svg/bell.svg";
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";


interface ICurrentTripButtonProps {
  hotelName: string
}

const CurrentTripButton: React.FC<ICurrentTripButtonProps> = ({hotelName}) => {
  const navigate = useNavigate();

  //todo
  //пока что хардкод пока беком не возвращается настоящая текущая поездка
  const handleRedirect = () => {
    navigate("/trip/1");
  };

  return (
      <div className={styles.container} onClick={handleRedirect}>
        <div className={styles.wrapper}>
          <div className={styles.upperPart}>
            <BellIcon />
            <p className={styles.currentTrip}>Текущая поездка</p>
          </div>
          <p className={styles.hotelName}> {hotelName} </p>
        </div>
        <ArrowIcon />
      </div>
  );
};

export default CurrentTripButton;
