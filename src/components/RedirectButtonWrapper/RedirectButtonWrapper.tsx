import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface IRedirectButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const RedirectButtonWrapper: React.FC<IRedirectButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {" "}
      {children}{" "}
    </div>
  );
};

export default RedirectButtonWrapper;
