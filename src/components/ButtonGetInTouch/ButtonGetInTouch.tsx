import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import useTelegram from "hooks/useTelegram";

interface IButtonGetInTouchProps {
  text?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  customStyles?: React.CSSProperties;
}

const ButtonGetInTouch: React.FC<IButtonGetInTouchProps> = ({
  text = "Связаться с отелем",
  Icon,
  customStyles,
}) => {
  const { tg } = useTelegram();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    const handleGetInTouch = () => {
      if (tg) {
        tg.ready();
        tg.sendData("/help");
      }
    };

    if (buttonElement) {
      buttonElement.addEventListener("click", handleGetInTouch);
      buttonElement.addEventListener("touchstart", handleGetInTouch); 

      return () => {
        buttonElement.removeEventListener("click", handleGetInTouch);
        buttonElement.removeEventListener("touchstart", handleGetInTouch);
      };
    }
  }, [tg]);

  return (
    <button
      ref={buttonRef}
      className={styles.button}
      style={customStyles ? { ...customStyles } : {}}
    >
      {text}
      <Icon />
    </button>
  );
};

export default ButtonGetInTouch;
