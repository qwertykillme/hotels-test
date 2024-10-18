import { CSSProperties } from "react";
import styles from "./styles.module.scss";

interface IButtonGetInTouchProps {
  text?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  onTouchStart: () => void;
  customStyles?: CSSProperties;
}

const ButtonGetInTouch: React.FC<IButtonGetInTouchProps> = ({
  text = "Связаться с отелем",
  Icon,
  onClick,
  onTouchStart,
  customStyles,
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      onTouchStart={onTouchStart}
      style={customStyles ? { ...customStyles } : {}}
    >
      {text}
      <Icon />
    </button>
  );
};

export default ButtonGetInTouch;
