import Accordion from "@components/Accordion/Accordion";
import styles from "./styles.module.scss"
import TripCard from "@components/TripCard/TripCard";

const TripHistory: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}> Поездки </div>
            <Accordion text="Запланированные"buttonClassName={styles.customButton}>
                <div className={styles.cardWrapper}>
                <TripCard/>

                </div>
            </Accordion>
        </div>
    )
}

export default TripHistory;