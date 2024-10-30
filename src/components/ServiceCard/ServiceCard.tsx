import Accordion from "@components/Accordion/Accordion";
import AccordionCard from "@components/AccordionCard/AccordionCard";
import AccordionItemButtons from "@components/AccordionItemButtons/AccordionItemButtons";
import { RootState } from "@redux/store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import zaglushka from "@/assets/png/zaglushka.png";
import useTripId from "helpers/useTripId";

const ServiceCard = () => {
  const tripId = useTripId();
  const currentServices = useSelector(
    (state: RootState) => state.currentHotel.service_list
  );

  const navigate = useNavigate();

  const redirectService = (id: number) => {
    navigate(`/trip/${tripId}/services/${id}`);
  };
  const BASE_IMAGE = zaglushka;

  return (
    <>
      {currentServices.map((service) => (
        <div className={styles.services_wrapper}>
          <Accordion
          text={service.name}
          footer={
            <AccordionItemButtons
              onClickLeft={() => {}}
              onClickRight={() =>
                service?.id !== null && redirectService(service?.id)
              }
            />
          }
        >
          <AccordionCard
            imageSrc={
              service?.photo_list?.length
                ? service.photo_list[0].url
                : BASE_IMAGE
            }
            shortDescription={service.short_description}
          />
        </Accordion>
        </div>
        
      ))}
    </>
  );
};

export default ServiceCard;
