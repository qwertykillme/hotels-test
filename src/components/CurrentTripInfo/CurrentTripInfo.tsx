import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "@/redux/store/store";
import { useCallback, useMemo, useState } from "react";
import { ReactComponent as AddIcon } from "@/assets/svg/plus-square.svg";
import Modal from "@components/Modal";
import clsx from "clsx";
import { setCurrentRoom } from "@redux/slices/currentTripSlice";
import { ReactComponent as EditIcon} from "@/assets/svg/edit-icon.svg"


interface ICurrentTripInfoProps {
  daysBeforeCheckout: string | number;
}

const CurrentTripInfo: React.FC<ICurrentTripInfoProps> = ({
  daysBeforeCheckout,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [prevRoom, setPrevRoom] = useState<string>("");

  const { currentHotelName, currentRoom } = useSelector((state: RootState) => ({
    currentHotelName: state.currentHotel.hotel_name,
    currentRoom: state.currentTrip.room,
  }));

 const handleClickOnAddRoom = useCallback(() => setIsOpen(true), []);

 const handleCancel = useCallback(() => {
    setPrevRoom("");
    setIsOpen(false);
  }, []);

  const handleSaveRoom = useCallback(() => {
    if (prevRoom) {
      dispatch(setCurrentRoom({ room: +prevRoom }));
      setIsOpen(false);
      setPrevRoom("");
    }
  }, [dispatch, prevRoom]);

  const handleEditRoom = useCallback(() => {
    setIsOpen(true);
    setPrevRoom(currentRoom ? currentRoom.toString() : "");
  }, [currentRoom]);

  const getCurrentRoom = useMemo(() => {
    if (currentRoom) {
      return (
        <div className={styles.roomContainer} onClick={handleEditRoom}>
          {currentRoom} <EditIcon className={styles.editIcon} />
        </div>
      );
    }
    return <AddIcon className={styles.add} onClick={handleClickOnAddRoom}/>
  }, [currentRoom, handleEditRoom, handleClickOnAddRoom])

  return (
    <div className={styles.wrapper}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <div>
            <h2>Введите номер комнаты</h2>
            <div className={styles.label}>
              Номер комнаты
            </div>
            <input type="text" onChange={(e) => setPrevRoom(e.target.value)} value={prevRoom}/>
          </div>
          <div className={styles.btns_contrainer}>
            <div className={styles.btns}>
              <div className={styles.button} onClick={handleCancel}>Отменить</div>
              <div className={clsx(styles.button, styles.button_accent)} onClick={handleSaveRoom}>Сохранить</div>
            </div>
          </div>
        </div>
      </Modal>
      <span className={styles.text}> {currentHotelName} </span>
      <div className={styles.wrapperInfo}>
        <span className={styles.subtext}>  До выезда <span className={styles.day}>{daysBeforeCheckout} </span> { daysBeforeCheckout === 1 ? "сутки" : "суток" } </span>
        <div className={styles.numberBlock}> Номер <div className={styles.number}> {getCurrentRoom} </div></div>
      </div>
    </div>
  );
};

export default CurrentTripInfo;
