import styles from "./styles.module.scss";
import ContactsList from "@/components/ContactsList/ContactsList";

interface IDefinitionPhoneList {
  title: string;
  items: { [key: string]: string }[]; //принимает в себя массив с объектами
}

const DefinitionPhoneList: React.FC<IDefinitionPhoneList> = ({
  title,
  items,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}:</h3>
      <ContactsList items={items} />
    </div>
  );
};

export default DefinitionPhoneList;
