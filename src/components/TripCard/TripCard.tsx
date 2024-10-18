import Icon from "@components/Icon/Icon"
import styles from "./styles.module.scss"
import { ReactComponent as EditIcon} from "@/assets/svg/edit.svg"

const TripCard:React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.title}> Grand Karat Sochi</h4>
                <span className={styles.date}> 05.10.2024 - 07.07.2024 </span>
                <span className={styles.room}> Номер 404 </span>
                <span className={styles.departure}>До поездки: <span className={styles.departureDay}> 2</span> суток</span>
            </div>
            <Icon Icon={EditIcon}/>
        </div>
    )
}

export default TripCard;