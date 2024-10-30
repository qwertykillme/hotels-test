import styles from "./styles.module.scss";
import DefinitionPhoneList from "@components/DefinitionPhoneList/DefinitionPhoneList";
import InfoHeader from "@components/InfoHeader/InfoHeader";

const ContactsCard = () => {
  return (
    <>
      <InfoHeader title="Grand Karat Sochi" category="Контакты" />
      <div className={styles.dpl_container}>
      <DefinitionPhoneList
        title={"Ресепшен"}
        items={[
          { Менеджер: "+7 (123) 456-321" },
          { Клининг: "+7 (123) 456-321" },
          { "Еда в номер": "+7 (123) 456-321" },
        ]}
      />

      <DefinitionPhoneList
        title={"Рестораны"}
        items={[
          { Ресторан1: "+7 (123) 456-321" },
          { Ресторан2: "+7 (123) 456-321" },
          { Длинныйрестораноченьдлинный: "+7 (123) 456-321" },
          { "Длинный ресторан очень длинный": "+7 (123) 456-321" },
        ]}
      />
      </div>
    
    </>
  );
};

export default ContactsCard;
