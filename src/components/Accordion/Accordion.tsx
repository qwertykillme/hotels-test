import { ReactNode, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/Button/Button";

//иконки
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";
import clsx from "clsx";

interface IAccordionProps {
  text: string;
  children: ReactNode;
  footer?: ReactNode;
  buttonClassName?: string;
}

const Accordion: React.FC<IAccordionProps> = ({ text, children, footer, buttonClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const getButtonClasses = useMemo(() => clsx({
    [styles.accordionBtn]: true,
    [styles.icon]: true,
    [styles.icon_open]: isOpen,
    [styles.icon_close]: !isOpen,
  }, buttonClassName), [isOpen, buttonClassName])
  
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Button
          text={text}
          onClick={handleClick}
          className={getButtonClasses}
          RightIcon={ArrowIcon}
        />
      </div>
      <div className={clsx(styles.wrapper, { [styles.open]: isOpen })}>
        {children}
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
};

export default Accordion;
