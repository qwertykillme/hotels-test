import { CSSProperties } from "react";
import Icon from "../Icon/Icon";
import styles from "./styles.module.scss";

interface IButttonUIProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconSize?: number;
  text?: string;
  iconCustomStyles?: CSSProperties;
}

const ButttonUI: React.FC<IButttonUIProps> = ({
  onClick,
  icon,
  iconSize,
  text,
  iconCustomStyles = {},
}) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        {iconSize ? (
          <Icon
            Icon={icon}
            size={iconSize}
            customStyles={{ ...iconCustomStyles }}
          />
        ) : (
          <Icon Icon={icon} customStyles={{ ...iconCustomStyles }} />
        )}
      </button>
      <h4 className={styles.text}> {text} </h4>
    </div>
  );
};

export default ButttonUI;
