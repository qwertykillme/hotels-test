import styles from "./styles.module.scss";

interface ISectionContainerProps {
  children: React.ReactNode;
}

const SectionContainer: React.FC<ISectionContainerProps> = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

export default SectionContainer;
