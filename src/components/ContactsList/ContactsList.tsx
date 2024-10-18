import ContactItem from "@/components/ContactItem/ContactItem";
import styles from "./styles.module.scss";

interface IContactsList {
  items: { [key: string]: string }[]; //массив с объектами
}

const ContactsList: React.FC<IContactsList> = ({ items }) => {
  return (
    <dl className={styles.dl}>
      {items.flatMap((contactsObj, index) => {
        return Object.entries(contactsObj).map(([name, contact]) => {
          return (
            <ContactItem
              key={`${index}-${name}`}
              name={name}
              contact={contact}
            />
          );
        });
      })}
    </dl>
  );
};

export default ContactsList;
