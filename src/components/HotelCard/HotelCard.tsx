import styles from "./styles.module.scss";

import { useNavigate } from "react-router-dom";
import AnimatedModal from "@components/AnimatedModal/AnimatedModal";
import Button from "@components/Button/Button";
import ButttonUI from "@components/ButtonUI/ButtonUI";
import CurrentTripInfo from "@components/CurrentTripInfo/CurrentTripInfo";
import DefinitionList from "@components/DefinitionList/DefinitionList";
import { useState, useCallback, useMemo, useEffect } from "react";
import { RootState } from "@redux/store/store";
import { useSelector } from "react-redux";

//иконки
import { ReactComponent as NavIcon } from "@/assets/svg/navigate.svg";
import { ReactComponent as CallIcon } from "@/assets/svg/call.svg";
import { ReactComponent as WifiIcon } from "@/assets/svg/wifi.svg";
import { ReactComponent as ShareIcon } from "@/assets/svg/share.svg";
import { ReactComponent as RestaurantIcon } from "@/assets/svg/restaurants.svg";
import { ReactComponent as ServicesIcon } from "@/assets/svg/beach.svg";
import { ReactComponent as ScheduleIcon } from "@/assets/svg/schedule.svg";
import { ReactComponent as InfoIcon } from "@/assets/svg/info.svg";
import useTripId from "helpers/useTripId";
import NavigationComponent from "@components/NavigationComponent/NavigationComponent";




const HotelCard: React.FC = () => {
  
  const currentHotel = useSelector((state: RootState) => state.currentHotel);
  const navigate = useNavigate();
  const id = useTripId()

  useEffect(() => {console.log(id)}, [id])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContentKey, setModalContentKey] = useState<"navigate" | "schedule" | "wifi" | "share" | null>(null);


  const wifiList = useMemo(() => currentHotel.wifi_list || [], [currentHotel]);
  const scheduleList = useMemo(() => currentHotel.food_schedule || [],[currentHotel]);

  const handleOpenModal = useCallback((content: "navigate" | "schedule" | "wifi" | "share") => {
    setModalContentKey(content);
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
    setModalContentKey(null);
  }, []);

  useEffect(() => {console.log(currentHotel.hotel_name)}, [currentHotel])
  //объект для отображения контента модалки по ключам
  const modalContent = useMemo(() => ({
    navigate: <NavigationComponent hotelName={currentHotel.hotel_name} />,
    schedule:
      scheduleList.length > 0 ? (
        <DefinitionList foodScheduleList={scheduleList} />
      ) : (
        <div className={styles.emptyState}>
          Кажется, списка &nbsp;<div className={styles.emptyStateMessage} >расписаний</div>&nbsp; пока нет :(
        </div>
      ),
    wifi:
      wifiList.length > 0 ? (
        <DefinitionList wifiList={wifiList} />
      ) : (
        <div className={styles.emptyState}> 
          Кажется, списка &nbsp;<div className={styles.emptyStateMessage}> wifi </div>&nbsp; пока нет :(
        </div>
      ),
    share: <h1>поделиться</h1>,
}), [wifiList, scheduleList]);

  const renderedModalContent = useMemo(() => (
      modalContentKey ? modalContent[modalContentKey] : null
    ), [modalContentKey, modalContent]
  );

  const handleNavigation = (path: string) => () => navigate(path);

  return (
    <>
      <CurrentTripInfo daysBeforeCheckout={5} />
      <div className={styles.navButtons}>
        <ButttonUI
          onClick={() => handleOpenModal("share")}
          icon={ShareIcon}
          iconSize={24}
          text="Поделиться"
        />
        <ButttonUI
          onClick={() => handleOpenModal("wifi")}
          icon={WifiIcon}
          iconSize={33}
          text="Пароли"
        />
        <ButttonUI
          onClick={() => handleOpenModal("schedule")}
          icon={ScheduleIcon}
          iconSize={32}
          text="Расписание"
        />
        <ButttonUI
          onClick={() => handleOpenModal("navigate")}
          icon={NavIcon}
          iconSize={30}
          text="Навигация"
        />
      </div>

      <Button
        LeftIcon={CallIcon}
        text="Контакты"
        onClick={handleNavigation(`/trip/${id}/contacts`)}
      />
      <Button
        LeftIcon={ServicesIcon}
        text="Удобства и услуги"
        onClick={handleNavigation(`/trip/${id}/services`)}
      />
      <Button
        LeftIcon={RestaurantIcon}
        text="Рестораны"
        onClick={handleNavigation(`/trip/${id}/restaurants`)}
      />
      <Button
        LeftIcon={InfoIcon}
        text="Описание отеля"
        onClick={handleNavigation(`/trip/${id}/description`)}
      />

      <AnimatedModal isOpen={isModalVisible} onModalClose={handleCloseModal}>
        {renderedModalContent}
      </AnimatedModal>
    </>
  );
};

export default HotelCard;
