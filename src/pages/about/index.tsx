import styles from "./styles.module.scss";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button/Button";
import ButttonUI from "@/components/ButtonUI/ButtonUI";
import ButtonGetInTouch from "@/components/ButtonGetInTouch/ButtonGetInTouch";
import DaysBeforeTrip from "@/components/DaysBeforeTrip/DaysBeforeTrip";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import AnimatedModal from "@/components/AnimatedModal/AnimatedModal";
import DefinitionList from "@/components/DefinitionList/DefinitionList";

//иконки
import { ReactComponent as NavIcon } from "@/assets/svg/navigate.svg";
import { ReactComponent as CallIcon } from "@/assets/svg/call.svg";
import { ReactComponent as WifiIcon } from "@/assets/svg/wifi.svg";
import { ReactComponent as ShareIcon } from "@/assets/svg/share.svg";
import { ReactComponent as RestaurantIcon } from "@/assets/svg/restaurants.svg";
import { ReactComponent as ServicesIcon } from "@/assets/svg/beach.svg";
import { ReactComponent as ScheduleIcon } from "@/assets/svg/schedule.svg";
import { ReactComponent as GetInTouchIcon } from "@/assets/svg/contact.svg";
import { ReactComponent as InfoIcon } from "@/assets/svg/info.svg";
import clsx from "clsx";
import BackButton from "@components/BackButton/BackButton";
import { hotelsAPIService } from "@redux/services/hotelsService";

const AboutPage = () => {
  const navigate = useNavigate();

  const [ModalVisibility, setModalVisibility] = useState(false);
  const [ModalContent, setModalContent] = useState<string | null>(null);

  const onModalClose = () => {
    setModalVisibility(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  const handleOpenModal = (
    e: React.MouseEvent<HTMLButtonElement>,
    content: string
  ) => {
    e.stopPropagation();
    setModalContent(content);
    setModalVisibility(true);
  };

  const handleRestaurantButton = () => {
    navigate("/about/restaurants");
  };
  const handleServicesButton = () => {
    navigate("/about/services");
  };
  const handleInfoButton = () => {
    navigate("/about/description");
  };
  const handleGetInTouch = () => {
    console.log("связались");
  };
  const handleCallButton = () => {
    navigate("/about/contacts");
  };

  const renderModalContent = () => {
    switch (ModalContent) {
      case "navigate":
        return <h1>где я</h1>;
    }
    switch (ModalContent) {
      case "schedule":
        return (
          <DefinitionList
            title="Расписание приемов пищи"
            items={[
              { "Завтрак в отеле": "С 8:00 до 10:00" },
              { "Обед в отеле": "С 8:00 до 10:00" },
              { "Ужин в отеле": "С 8:00 до 10:00" },
              { "Бар при отеле": "Круглосуточно" },
            ]}
          />
        );
    }
    switch (ModalContent) {
      case "wifi":
        return (
          <DefinitionList
            title="Пароли в отеле"
            items={[
              { "Пароль в вестибюле": "9skadmlxp2_Q!" },
              { "Пароль в ресторане А": "randompassword!" },
              { "Пароль СПА центра": 1234567890 },
              { "Пароль в комнатах": `0987654321` },
            ]}
          />
        );
    }
    switch (ModalContent) {
      case "share":
        return <h1>поделиться</h1>;
    }
  };
  const { data } = hotelsAPIService.useGetHotelsQuery();
  console.log(data);
  return (
    <div className={clsx(styles.main, { [styles.disabled]: ModalVisibility })}>
      <SectionContainer>
        <BackButton />
        <DaysBeforeTrip 
          hotelName="Grand Karat Sochi"
          daysBeforeCheckout={5}
          room={404}
        />
        <div className={styles.navButtons}>
          <ButttonUI
            onClick={useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
              handleOpenModal(e, "share");
            }, [])}
            icon={ShareIcon}
            iconSize={24}
            text="Поделиться"
          />
          <ButttonUI
            onClick={useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
              handleOpenModal(e, "wifi");
            }, [])}
            icon={WifiIcon}
            iconSize={33}
            text="Пароли"
          />
          <ButttonUI
            onClick={useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
              handleOpenModal(e, "schedule");
            }, [])}
            icon={ScheduleIcon}
            iconSize={32}
            text="Расписание"
          />
          <ButttonUI
            onClick={useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
              handleOpenModal(e, "navigate");
            }, [])}
            icon={NavIcon}
            iconSize={30}
            text="Навигация"
          />
        </div>
        <Button
          LeftIcon={CallIcon}
          text="Контакты"
          onClick={handleCallButton}
        />
        <Button
          LeftIcon={ServicesIcon}
          text="Удобства и услуги"
          onClick={handleServicesButton}
        />
        <Button
          LeftIcon={RestaurantIcon}
          text="Рестораны"
          onClick={handleRestaurantButton}
        />
        <Button
          LeftIcon={InfoIcon}
          text="Описание отеля"
          onClick={handleInfoButton}
        />
      </SectionContainer>
      <ButtonGetInTouch Icon={GetInTouchIcon} onClick={handleGetInTouch} />

      <AnimatedModal isOpen={ModalVisibility} onModalClose={onModalClose}>
        {renderModalContent()}
      </AnimatedModal>
    </div>
  );
};

export default AboutPage;
