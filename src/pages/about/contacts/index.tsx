import { ReactComponent as GetInTouchIcon } from "@/assets/svg/contact.svg";
import BackButton from "@/components/BackButton/BackButton";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import InfoHeader from "@/components/InfoHeader/InfoHeader";
import DefinitionPhoneList from "@/components/DefinitionPhoneList/DefinitionPhoneList";
import ButtonGetInTouch from "@/components/ButtonGetInTouch/ButtonGetInTouch";

const ContactsPage = () => {

  return (
    <SectionContainer>
      <BackButton />
      <InfoHeader title="Grand Karat Sochi" category="Контакты" />
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
      <ButtonGetInTouch
        Icon={GetInTouchIcon}
      />
    </SectionContainer>
  );
};

export default ContactsPage;
