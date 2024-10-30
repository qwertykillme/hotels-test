import Accordion from "@components/Accordion/Accordion";
import AccordionCard from "@components/AccordionCard/AccordionCard";
import AccordionItemButtons from "@components/AccordionItemButtons/AccordionItemButtons";
import InfoHeader from "@components/InfoHeader/InfoHeader";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@redux/store/store";
import zaglushka from "@/assets/png/zaglushka.png";
import styles from "./styles.module.scss";
import useTripId from "helpers/useTripId";

const RestaurantCard = () => {
  const BASE_IMAGE = zaglushka;
  const tripId = useTripId();
  const currentHotel = useSelector(
    (state: RootState) => state.currentHotel.hotel_name
  )
  const currentServices = useSelector(
    (state: RootState) => state.currentHotel.service_list
  );

  const navigate = useNavigate();

  const redirectService = (id: number) => {
    navigate(`/trip/${tripId}/services/${id}`);
  };

  return (
    <>
      <InfoHeader title={currentHotel} category="Рестораны" />
      <div className={styles.restaurants_wrapper}>
        {currentServices.map((service) => (
          <Accordion
            text={service.name}
            footer={
              <AccordionItemButtons
                onClickLeft={() => {}}
                onClickRight={() => {
                  service?.id !== null && redirectService(service?.id);
                }}
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
        ))}
      </div>
    </>
  );
};

export default RestaurantCard;
