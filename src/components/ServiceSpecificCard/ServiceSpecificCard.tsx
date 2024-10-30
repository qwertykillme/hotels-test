import Gallery from "@components/Gallery/Gallery";
import InfoHeader from "@components/InfoHeader/InfoHeader";
import styles from "./styles.module.scss";
import { hotelsAPIService } from "@redux/services/hotelsService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@components/Button/Button";
import { ReactComponent as ContactIcon } from "@/assets/svg/contact.svg";

const ServiceSpecificCard = () => {
  const [getServiceById, { data }] =
    hotelsAPIService.useLazyGetServiceByIdQuery();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) getServiceById({ serviceId: +id });
  }, [id, getServiceById]);

  return (
    <>
      <InfoHeader title={data?.name || "Услуга"} />
      <div className={styles.specificService_wrapper}>
        <Gallery
          title={"Галерея"}
          images={data?.photo_list?.map(({ url }) => url) || []}
        />
        <div className={styles.description}>
          <h2 className={styles.description_title}>Описание</h2>
          <div className={styles.description_info}>
            {data?.full_description || "Пока описания нет"}
          </div>
        </div>
        <Button
          text="Записаться"
          RightIcon={ContactIcon}
          className={styles.button}
          onClick={() => {
            console.log("записались");
          }}
        />
      </div>
    </>
  );
};

export default ServiceSpecificCard;
