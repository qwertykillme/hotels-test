import Icon from "@components/Icon/Icon"
import styles from "./styles.module.scss"
import { ReactComponent as EditIcon} from "@/assets/svg/edit.svg"

interface ITripHistoryCard {
    futureTrip: boolean;
}

//TODO разобраться с подтягиванием номера +  до поездки 
const TripHistoryCard:React.FC<ITripHistoryCard> = ({futureTrip}) => {
    
    // const currentHotel = useSelector((state: RootState) => state.currentHotel);
    // const currentTrip = useSelector((state: RootState) => state.currentTrip);

    // const formatDate = (dateString: string) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleDateString("ru-RU", {
    //         day: "2-digit",
    //         month: "2-digit",
    //         year: "numeric"
    //     });
    // };
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.title}> Grand Karat Sochi </h4>
                {/* <span className={styles.date}> {formatDate(currentTrip.begin_at)} - {formatDate(currentTrip.end_at)} </span> */}
                <span className={styles.date}> 05.07.2020 - 10.07.2020 </span>
                <span className={styles.room}> Номер 404 </span>
                {futureTrip &&<span className={styles.departure}>До поездки: <span className={styles.departureDay}> 2</span> суток</span>}
            </div>
            <Icon Icon={EditIcon}/>
        </div>
    )
}

export default TripHistoryCard;