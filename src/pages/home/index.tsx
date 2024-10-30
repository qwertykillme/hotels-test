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



const HomePage = () => {
  
  const { user } = useTelegram()
  const navigate = useNavigate();
  const handleNavigation = (path: string) => () => navigate(path);

  return (
      <SectionContainer>
        {/* <InfoHeader title={`Утра, @${ user ? user.first_name : "Константин"}`}  /> */}
        <div className={styles.greeting}> {`Утра! @${ user ? user.first_name : "Константин"}`}</div>
        <Button
          LeftIcon={MapPin}
          RightIcon={Arrow}
          text="Добавить поездку"
          onClick={handleNavigation("/add-trip")}
        />
        <Button
          LeftIcon={Map}
          RightIcon={Arrow}
          text="История поездок"
          onClick={handleNavigation("/trip-history")}
        />
        <CurrentTripButton 
        hotelName="Grand Karat Sochi"
      />
      </SectionContainer>
  
  );
};

export default HomePage;
