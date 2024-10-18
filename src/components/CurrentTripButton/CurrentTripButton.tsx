import styles from "./styles.module.scss";
import RedirectButtonWrapper from "../RedirectButtonWrapper/RedirectButtonWrapper";

import { useNavigate } from "react-router-dom";


//иконки
import { ReactComponent as BellIcon } from "@/assets/svg/bell.svg";
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";

interface ICurrentTripButtonProps {
  hotelName: string
}

const CurrentTripButton: React.FC<ICurrentTripButtonProps> = ({hotelName}) => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/about");
  };

  return (
    <RedirectButtonWrapper onClick={handleRedirect}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.upperPart}>
            <BellIcon />
            <p className={styles.currentTrip}>Текущая поездка</p>
          </div>
          <p className={styles.hotelName}> {hotelName} </p>
        </div>
        <ArrowIcon />
      </div>
    </RedirectButtonWrapper>
  );
};

export default CurrentTripButton;
