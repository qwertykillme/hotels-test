import { CSSProperties } from "react";
import styles from "./styles.module.scss";

interface IButtonGetInTouchProps {
  text?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  customStyles?: CSSProperties;
}

const ButtonGetInTouch: React.FC<IButtonGetInTouchProps> = ({
  text = "Связаться с отелем",
  Icon,
  onClick,
  customStyles,
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={customStyles ? { ...customStyles } : {}}
    >
      {text}
      <Icon />
    </button>
  );
};

export default ButtonGetInTouch;
