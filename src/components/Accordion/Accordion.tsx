import { ReactNode, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/Button/Button";

//иконки
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";
import clsx from "clsx";

interface IAccordionProps {
  text: string;
  tripCounter?: string;
  children: ReactNode;
  footer?: ReactNode;
  buttonClassName?: string;
  defaultOpen?: boolean
}

const Accordion: React.FC<IAccordionProps> = ({ text, tripCounter, children, footer, buttonClassName, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || tripCounter === "0");

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });

      }, 300)
    }
  }, [isOpen]);

  const getButtonClasses = useMemo(() => clsx({
    [styles.accordionBtn]: true,
    [styles.icon]: true,
    [styles.icon_open]: isOpen,
    [styles.icon_close]: !isOpen,
  }, buttonClassName), [isOpen, buttonClassName])
  
  return (
    <div ref={contentRef} className={styles.container}>
      <div className={styles.button}>
        {tripCounter ? (
          <Button
            text={tripCounter === "0" ? text : `${text}: ${tripCounter}`}
            onClick={handleClick}
            className={getButtonClasses}
            RightIcon={ArrowIcon}
            styles={{ fontSize: "20px" }}
          />
        ) : (
          <Button
            text={text}
            onClick={handleClick}
            className={getButtonClasses}
            RightIcon={ArrowIcon}
            styles={{ fontSize: "20px" }} // Лишняя скобка удалена
          />
        )}
      </div>
      <div className={clsx(styles.wrapper, { [styles.open]: isOpen })}>
        {children}
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
}  

export default Accordion;