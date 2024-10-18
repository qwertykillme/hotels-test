import styles from "./styles.module.scss";
import { useState } from "react";

import Button from "@components/Button/Button";
import BackButton from "@components/BackButton/BackButton";
import SectionContainer from "@components/SectionContainer/SectionContainer";

import { ReactComponent as AddIcon } from "@/assets/svg/plus-square.svg";
import Modal from "@components/Modal";

//календарь
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

const AddTrip: React.FC = () => {
  registerLocale("ru", ru);
  const hotels = ["Grand Karat Sochi", "Gwand Kawat Sochi", "UWUHotel"];

  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [roomNumber, setRoomNumber] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

  const handleOpenModal = (modalType: string) => {
    setIsModalOpen(modalType);
  };

  const handleCloseModal = () => {
    setIsModalOpen(null);
  };

  return (
    <div className={styles.container}>
      <SectionContainer>
        <BackButton />

        <div className={styles.title}> Добавить поездку </div>
        <Button
          text={selectedHotel ? selectedHotel : "Отель"}
          RightIcon={AddIcon}
          onClick={() => handleOpenModal("hotel")}
          styles={{ width: "100%" }}
        />

        <Button
          text={
            checkInDate
              ? format(checkInDate, "dd MMMM yyyy", { locale: ru })
              : "Дата заезда"
          }
          RightIcon={AddIcon}
          onClick={() => handleOpenModal("checkIn")}
          styles={{ width: "100%" }}
        />

        <Button
          text={
            checkOutDate
              ? format(checkOutDate, "dd MMMM yyyy", { locale: ru })
              : "Дата выезда"
          }
          RightIcon={AddIcon}
          onClick={() => handleOpenModal("checkOut")}
          styles={{ width: "100%" }}
        />
        <Button
          text={roomNumber ? roomNumber : "Номер"}
          RightIcon={AddIcon}
          onClick={() => handleOpenModal("room")}
          styles={{ width: "100%" }}
        />
        <Button
          text="Добавить поездку"
          RightIcon={false}
          onClick={() => {console.log("что-то делаю с данными")}}
          styles={{ width: "100%", backgroundColor:"var(--accent-color)", marginTop: "auto" }}

        />
      </SectionContainer>
      

      <Modal isOpen={isModalOpen === "hotel"} onClose={handleCloseModal}>
        <h3>Выберите отель</h3>
        <ul>
          {hotels.map((hotel, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedHotel(hotel);
                handleCloseModal();
              }}
            >
              {hotel}
            </li>
          ))}
        </ul>
      </Modal>

      <Modal isOpen={isModalOpen === "checkIn"} onClose={handleCloseModal}>
        <div className={styles.calendar}>
          <h3>Выберите дату заезда</h3>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date as Date)}
            dateFormat="dd/MM/yyyy"
            locale="ru"
            inline
            className={styles.customDatePicker}
          />
          <Button
            text="Сохранить"
            RightIcon={false}
            onClick={handleCloseModal}
            styles={{
              backgroundColor: "var(--accent-color)",
              width: "100%",
              marginTop: "10px",
            }}
          />
        </div>
      </Modal>

      <Modal isOpen={isModalOpen === "checkOut"} onClose={handleCloseModal}>
        <div className={styles.calendar}>
          <h3>Выберите дату выезда</h3>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date as Date)}
            dateFormat="dd/MM/yyyy"
            locale="ru"
            inline
            className={styles.customDatePicker}
          />
          <Button
            text="Сохранить"
            RightIcon={false}
            onClick={handleCloseModal}
            styles={{
              backgroundColor: "var(--accent-color)",
              width: "100%",
              marginTop: "10px",
            }}
          />
        </div>
      </Modal>

      <Modal isOpen={isModalOpen === "room"} onClose={handleCloseModal}>
        <div className={styles.calendar}>
          <h3>Выберите ваш номер</h3>
          
          <input 
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="Введите номер комнаты"
            className={styles.roomInput}
          />

          
        </div>
      </Modal>

    </div>
  );
};

export default AddTrip;
