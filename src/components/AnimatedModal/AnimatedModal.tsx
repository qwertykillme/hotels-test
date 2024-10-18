import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import clsx from "clsx";

interface IAnimatedModalProps {
  isOpen: boolean;
  onModalClose: () => void;
  children: React.ReactNode;
}

const AnimatedModal: React.FC<IAnimatedModalProps> = ({
  isOpen,
  onModalClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [startTouch, setStartTouch] = useState<number | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onModalClose();
      }
    },
    [onModalClose]
  );

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && modalRef.current.contains(event.target as Node))
      return;
    if (event.target === (event.currentTarget as Node)) {
      onModalClose();
    }
  };

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
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // const handleClick = (e: React.MouseEvent) => {
  //     if (modalRef.current && modalRef.current.contains(e.target as Node)) {
  //         e.stopPropagation();
  //     }
  // };

  return (
    <div
      className={clsx(styles.overlay, { [styles.open]: isOpen })}
      onClick={handleOverlayClick}
    >
      <div
        className={clsx(styles.modal, { [styles.modalOpen]: isOpen })}
        ref={modalRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AnimatedModal;
