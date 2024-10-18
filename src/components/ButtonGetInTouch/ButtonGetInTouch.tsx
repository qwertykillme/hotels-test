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

  const handleGetInTouch = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    // event.preventDefault()
    console.log('test')
    if (tg) {
      tg.ready();
      tg.sendData("/help")
      console.log("tg", {tg})
    }
  };

  const handleGetInTouchMobile = (event: React.TouchEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('test 2')
    if (tg) {
      tg.ready();
      tg.sendData("/help")
      console.log("tg Mobile", {tg})
    }
  };
  return (
    <button
      className={styles.button}
      onClick={handleGetInTouch}
      onTouchStart={handleGetInTouchMobile}
      style={customStyles ? { ...customStyles } : {}}
    >
      {text}
      <Icon />
    </button>
  );
};

export default ButtonGetInTouch;
