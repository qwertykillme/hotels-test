import styles from "./styles.module.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "@components/Button/Button";
import { ReactComponent as AddIcon } from "@/assets/svg/plus-square.svg";
import { ReactComponent as MinusIcn } from "@/assets/svg/minus.svg";

import AnimatedModal from "@components/AnimatedModal/AnimatedModal";
import DatePicker from "@components/DatePicker";
import moment from 'moment'
import { hotelsAPIService } from "@redux/services/hotelsService";
import clsx from "clsx";
import InfoHeader from "@components/InfoHeader/InfoHeader";
import { useNavigate } from "react-router-dom";

const getDate = (date: moment.Moment | null) => date ? date.format('DD.MM.YYYY') : 'Выбрать дату'

const AddTrip: React.FC = () => {
  const [getHotels, {data: hotels}] = hotelsAPIService.useLazyGetHotelsQuery();
  const [ createTrip, {data: trip , error: tripError, isError: isTripError, isSuccess: isTripSuccess} ] = hotelsAPIService.useLazyCreateTripQuery();

  const [adultCount, setAdultCount] = useState<number>(1);
  const [childCount, setChildCount] = useState<number>(0);
  const [selectedHotel, setSelectedHotel] = useState<{ id: number | null; name: string | null}>({ id: null, name: null });
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);
  const [[startDate, endDate], setDates] = useState<[moment.Moment | null, moment.Moment | null]>([null, null])
  const [errorMessage, setErrorMessage] = useState<string>("")

  const navigate = useNavigate();

  useEffect(() => {
    getHotels()
  }, [getHotels])

  useEffect(() => {
    if (isTripSuccess) {
      // setErrorMessage("");
      // setAdultCount(1);
      // setChildCount(0);
      // setSelectedHotel({ id: null, name: null });
      // setDates([null, null]);
      navigate(`/trip/${trip?.id}`)
    }
    if (isTripError) {
      setErrorMessage("Что-то пошло не так...");
      console.error("tripPostError", tripError)
    }
  }, [isTripError, isTripSuccess, navigate, trip?.id, tripError]);


  const handleSetDate = useCallback((data: [moment.Moment | null, moment.Moment | null]) => {
    setDates(data);
  }, []);

  const handleOpenModal = (modalType: string) => {
    setIsModalOpen(modalType);
  };

  const handleCloseModal = () => {
    setIsModalOpen(null);
  };


  const handleCloseDates = () => {
    handleCloseModal();
    setDates([null, null]);
  }
  const handleMinusAdult = () => {
    setAdultCount((prev) => (prev - 1) > 1 ? prev - 1 : 1)
  }
  const handleAddAdult = () => {
    setAdultCount((prev) => prev + 1)
  }

  const handleMinusChild = () => {
    setChildCount((prev) => (prev - 1) > 0 ? prev - 1 : 0)
  }

  const handleAddChild = () => {
    setChildCount((prev) => prev + 1)
  }

  //пока что userId захардкожен
  //todo
  const handleSave = async () => {
    await createTrip({
      adult_count: adultCount,
      child_count: childCount,
      begin_at: startDate?.format('YYYY-MM-DD') || "",
      end_at: endDate?.format('YYYY-MM-DD') || "",
      user_id: 1,
      hotel_id: selectedHotel?.id,
    });
  };

  const isHotelSelected = Boolean(selectedHotel);
  const areDatesSelected = Boolean(startDate && endDate);
  const isAdultCountValid = adultCount > 0;
  const isChildCountValid = childCount >= 0;

  const isSaveDisabled = useMemo(() => {
    return !isHotelSelected || !areDatesSelected || !isAdultCountValid || !isChildCountValid;
  }, [isHotelSelected, areDatesSelected, isAdultCountValid, isChildCountValid]) 


  useEffect(() => {console.log(hotels)}, [hotels])

  return (
    <>
        <InfoHeader title="Добавить поездку"/>
        <div className={styles.addTrip_container}>
        <Button
          text={selectedHotel.name ? selectedHotel.name : "Отель"}
          RightIcon={AddIcon}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation(); 
            handleOpenModal("hotel");
          }}
          className={styles.hotelButton}
        />
        <div className={styles.personCount}>
          <div className={styles.personCount_label}> Количество взрослых </div>
          <div className={styles.personCount_actions}>
            <MinusIcn onClick={handleMinusAdult} className={styles.icnChange}/>
            <div className={styles.personCount_counter}>{adultCount}</div>  
            <AddIcon onClick={handleAddAdult} className={styles.icnChange}/>
          </div>
        </div>

        <div className={styles.personCount}>
          <div className={styles.personCount_label}> Количество детей </div>
          <div className={styles.personCount_actions}>
            <MinusIcn onClick={handleMinusChild} className={styles.icnChange}/>
            <div className={styles.personCount_counter}>{childCount}</div>  
            <AddIcon onClick={handleAddChild} className={styles.icnChange}/>
          </div>
        </div>

        <div className={styles.dates} style={{margin: 0, justifyContent: 'space-between'}}>
          <div className={styles.date} onClick={() => handleOpenModal("checkIn")}>
            <div className={styles.date_label}>Дата заезда</div>
            <div className={styles.date_value}>{getDate(startDate)}</div>
          </div>
          <div className={styles.date} onClick={() => handleOpenModal("checkIn")}>
            <div className={styles.date_label}>Дата выезда</div>
            <div className={styles.date_value}>{getDate(endDate)}</div>
          </div>
        </div>

        <Button
          text="Сохранить"
          RightIcon={false}
          onClick={handleSave}
          className={clsx(styles.saveButton, {[styles.saveButton_disabled]: isSaveDisabled })}
        />
        <div className={styles.errorMessage}> {errorMessage} </div>


        </div>

      <AnimatedModal isOpen={isModalOpen === "hotel"} onModalClose={handleCloseModal} classname={styles.modal}>
        <h3>Выберите отель</h3>
        <ul>
          {hotels?.map((hotel) => (
            <li
              key={hotel.id}
              onClick={() => {
                setSelectedHotel({id: hotel.id!, name:hotel.hotel_name});
                handleCloseModal();
              }}
            >
              <div className={styles.hotels_container}>
                <span className={styles.hotels_container_hotelName}> {hotel.hotel_name} </span> - {hotel.description} 
              </div>
            </li>
          ))}
        </ul>
      </AnimatedModal>

      <AnimatedModal isOpen={isModalOpen === "checkIn"} onModalClose={handleCloseDates}>
        <div className={styles.calendar}>
          <h2>Выберите даты</h2>
          <div className={styles.dates}>
            <div className={styles.date}>
              <div className={styles.date_label}>Дата заезда</div>
              <div className={styles.date_value}>{getDate(startDate)}</div>
            </div>
            <div className={styles.date}>
              <div className={styles.date_label}>Дата выезда</div>
              <div className={styles.date_value}>{getDate(endDate)}</div>
            </div>
          </div>
          <DatePicker onChange={handleSetDate} />
          <Button
            text="Сохранить"
            RightIcon={false}
            onClick={handleCloseModal}
            styles={{
              backgroundColor: "var(--accent-color)",
              width: "100%",
              marginTop: "18px",
              minHeight: 48
            }}
          />
        </div>
      </AnimatedModal>

      <AnimatedModal isOpen={isModalOpen === "checkOut"} onModalClose={handleCloseModal}>
        <div className={styles.calendar}>
          <h3>Выберите дату выезда</h3>
          <Button
            text="Сохранить"
            RightIcon={false}
            onClick={handleCloseModal}
            styles={{
              backgroundColor: "var(--accent-color)",
              width: "100%",
              marginTop: "18px",
            }}
          />
        </div>
      </AnimatedModal>
    </>
  );
};

export default AddTrip;
