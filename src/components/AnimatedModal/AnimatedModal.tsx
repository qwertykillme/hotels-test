import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import clsx from "clsx";

interface IAnimatedModalProps {
  isOpen: boolean;
  onModalClose:any;
  children: React.ReactNode;
  classname?: string;
}

const AnimatedModal: React.FC<IAnimatedModalProps> = ({
  isOpen,
  onModalClose,
  children,
  classname
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [startTouch, setStartTouch] = useState<number | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onModalClose();
      }
    },
    [modalRef, onModalClose]  
  );

  const handleTouchStart = (event: React.TouchEvent) => {
    setStartTouch(event.touches[0].clientY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (startTouch === null) return;
    const currentTouch = event.touches[0].clientY;
    const deltaY = currentTouch - startTouch;
    if (deltaY > 50) {
      onModalClose();
    }
  };

  const handleTouchEnd = () => {
    setStartTouch(null);
  };

useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);


  return (
    <div
      className={clsx(styles.overlay, { [styles.open]: isOpen })}
    >
      <div
        className={clsx(styles.modal, { [styles.modalOpen]: isOpen })}
        ref={modalRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={clsx({ [styles.content]: !classname }, classname)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedModal;