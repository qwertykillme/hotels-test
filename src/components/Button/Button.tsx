import style from "./styles.module.scss";
import Icon from "../Icon/Icon";

//иконки
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";

interface IButtonProps {
  LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.FC<React.SVGProps<SVGSVGElement>> | false;
  className?: string;
  iconSize?: number;
  iconSizeRight?: number;
  text: string;
  onClick: any;
  styles?: React.CSSProperties;
  customLeftIconStyles?: React.CSSProperties;
  customRightIconStyles?: React.CSSProperties;
}

const Button: React.FC<IButtonProps> = ({
  text,
  LeftIcon,
  iconSize,
  className,
  iconSizeRight,
  RightIcon = ArrowIcon,
  styles = {},
  customLeftIconStyles = {},
  customRightIconStyles = {},
  onClick,
}) => {
  return (
    <button
      className={`${style.button} ${className || ""}`}
      onClick={onClick}
      style={{ ...styles }}
    >
      <div className={style.leftPart}>
        <Icon
          Icon={LeftIcon}
          size={iconSize}
          customStyles={customLeftIconStyles}
        />
        <span>{text}</span>
      </div>
      <Icon
        Icon={RightIcon as any}
        size={iconSizeRight}
        customStyles={customRightIconStyles}
      />
    </button>
  );
};

export default Button;
