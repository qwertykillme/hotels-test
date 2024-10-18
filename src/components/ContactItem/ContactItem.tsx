import styles from "./styles.module.scss";

interface IContactItemProps {
  name: string;
  contact: string;
}

const ContactItem: React.FC<IContactItemProps> = ({ name, contact }) => {
  const formattedValue = `tel:${contact.replace(/[^0-9]/g, "")}`;

  return (
    <div className={styles.container}>
      <dt className={styles.dt}> {name}: </dt>
      <dd className={styles.dd}>
        <a href={formattedValue} className={styles.link}>
          {" "}
          {contact}{" "}
        </a>
      </dd>
    </div>
  );
};

export default ContactItem;
