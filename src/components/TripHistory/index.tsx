import Accordion from "@components/Accordion/Accordion";
import styles from "./styles.module.scss"
import TripHistoryCard from "@components/TripHistoryCard/TripHistoryCard";
import InfoHeader from "@components/InfoHeader/InfoHeader";

const TripHistory: React.FC = () => {
    const tripCounter1 = 0;
    const tripCounter2 = 1;
    return (
        <div className={styles.tripHistory_container}>
            <InfoHeader title="Поездки"/>
            <Accordion text="Запланированные" tripCounter={String(tripCounter1)} buttonClassName={styles.customButton}>
                {tripCounter1
                    ?
                    <div className={styles.cardWrapper}>
                    <TripHistoryCard futureTrip/>
                    </div>
                    : <div className={styles.emptyState}>Пока что нет запланированных поездок</div>
                }
                
            </Accordion>
            <Accordion text="Завершенные" tripCounter={String(tripCounter2)} buttonClassName={styles.customButton}>
            {tripCounter2
                    ?
                    <div className={styles.cardWrapper}>
                    <TripHistoryCard futureTrip={false}/>
                    </div>
                    : <div className={styles.emptyState}>Пока что нет завершенных поездок</div>
                }
            </Accordion>
        </div>
    )
}

export default TripHistory;