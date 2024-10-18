import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Button from "@/components/Button/Button";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import CurrentTripButton from "@/components/CurrentTripButton/CurrentTripButton";

//иконки
import { ReactComponent as MapPin } from "@/assets/svg/map-pin.svg";
import { ReactComponent as Map } from "@/assets/svg/map.svg";
import { ReactComponent as Arrow } from "@/assets/svg/arrow-right.svg";
import useTelegram from "hooks/useTelegram";


const HomePage = ({username} : {username: string | null}) => {
  const { user } = useTelegram()
  const navigate = useNavigate();

  const handleAddTrip = () => {
    navigate("/add-trip");
    console.log("добавилась поездка");
  };
  const handleGetHistory = () => {
    navigate("trip-history");
    console.log("показалась история");
  };

  return (
    <div className={styles.container}>
      <SectionContainer>
        <div className={styles.greeting}> {`Утра! @${ user ? user.first_name : " "}`}</div>
        <Button
          LeftIcon={MapPin}
          RightIcon={Arrow}
          text="Добавить поездку"
          onClick={handleAddTrip}
        />
        <Button
          LeftIcon={Map}
          RightIcon={Arrow}
          text="История поездок"
          onClick={handleGetHistory}
        />
      </SectionContainer>
      <CurrentTripButton 
        hotelName="Grand Karat Sochi"
      />
    </div>
  );
};

export default HomePage;
