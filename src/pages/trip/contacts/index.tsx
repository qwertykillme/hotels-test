import { ReactComponent as GetInTouchIcon } from "@/assets/svg/contact.svg";
import BackButton from "@/components/BackButton/BackButton";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ButtonGetInTouch from "@/components/ButtonGetInTouch/ButtonGetInTouch";
import ContactsCard from "@components/ContactsCard/ContactsCard";


const ContactsPage = () => {


  return (
    <SectionContainer>
      <BackButton />
      <ContactsCard/>
      <ButtonGetInTouch
        Icon={GetInTouchIcon}
      />   
    </SectionContainer>
  );
};

export default ContactsPage;
