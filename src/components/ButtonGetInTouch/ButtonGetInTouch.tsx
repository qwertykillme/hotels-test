import { CSSProperties } from "react";
import styles from "./styles.module.scss";
import useTelegram from "hooks/useTelegram";

interface IButtonGetInTouchProps {
  text?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  customStyles?: CSSProperties;
}

const ButtonGetInTouch: React.FC<IButtonGetInTouchProps> = ({
  text = "Связаться с отелем",
  Icon,
  customStyles,
}) => {

  const {tg} = useTelegram();

  const handleGetInTouch = () => {
    if (tg) {
      tg.ready();
      tg.sendData("/help")
    }
  };


  return (
    <button
      className={styles.button}
      onClick={handleGetInTouch}
      style={customStyles ? { ...customStyles } : {}}
    >
      {text}
      <Icon />
    </button>
  );
};

export default ButtonGetInTouch;
