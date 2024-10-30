import styles from "./styles.module.scss";
interface IInfoHeaderProps {
  title: string;
  category?: string;
}

const InfoHeader: React.FC<IInfoHeaderProps> = ({ title, category }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {category  && <h2 className={styles.category}>{category}</h2>}
    </div>
  );
};

export default InfoHeader;
