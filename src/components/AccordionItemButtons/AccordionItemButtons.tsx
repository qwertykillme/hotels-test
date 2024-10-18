import styles from "./styles.module.scss";
import Button from "@/components/Button/Button";

//иконки
import { ReactComponent as GetInTouchIcon } from "@/assets/svg/contact.svg";

interface IAccordionItemButtonsProps {
  onClickLeft: () => void;
  onClickRight: () => void;
}

const AccordionItemButtons: React.FC<IAccordionItemButtonsProps> = ({
  onClickLeft,
  onClickRight,
}) => {
  return (
    <div className={styles.buttons}>
      <Button
        text="Записаться"
        onClick={onClickLeft}
        RightIcon={GetInTouchIcon}
        styles={{
          backgroundColor: `var(--accent-color)`,
          padding: "7.5px 9px 8px 6px",
          fontSize: "14px",
          width: "auto",
        }}
      />

      <Button
        text="Подробнее"
        onClick={onClickRight}
        styles={{
          padding: "7.5px 9px 8px 6px",
          border: "1px solid #5DA2D3",
          fontSize: "14px",
          maxWidth: "50%",
        }}
      />
    </div>
  );
};

export default AccordionItemButtons;
