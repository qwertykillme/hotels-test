import styles from "./styles.module.scss";
import Button from "../Button/Button";

//иконки
import { ReactComponent as ContactIcon } from "@/assets/svg/getintouch.svg";

interface IAccordionCardServicePriceProps {
  service: string;
  price: number;
  onClick: () => void;
}

const AccordionCardServicePrice: React.FC<IAccordionCardServicePriceProps> = ({
  service,
  price,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4 className={styles.service}> {service} </h4>
        <span className={styles.price}>
          {" "}
          Цена: <span className={styles.priceValue}> {price} </span>{" "}
          <span className={styles.currency}> р.</span>{" "}
        </span>
      </div>

      <div className={styles.button}>
        <Button
          text="Записаться"
          RightIcon={ContactIcon}
          iconSizeRight={16}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default AccordionCardServicePrice;
