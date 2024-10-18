import Accordion from "@/components/Accordion/Accordion";
import BackButton from "@/components/BackButton/BackButton";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import InfoHeader from "@/components/InfoHeader/InfoHeader";
import AccordionCard from "@/components/AccordionCard/AccordionCard";
import AccordionItemButtons from "@/components/AccordionItemButtons/AccordionItemButtons";
import { useNavigate } from "react-router-dom";

const test = [
  "Услуга",
  "Услуга Клево Супер Длинно Слова",
  "УслугаУслугаУслугаУслуга",
  "Массаж",
  "Массаж",
  "Массаж",
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const redirectSpa = () => {
    navigate("/about/services/spa");
  };

  return (
    <SectionContainer>
      <BackButton />
      <InfoHeader title="Grand Karat Sochi" category="Услуги" />
      <Accordion
        text="СПА"
        footer={
          <AccordionItemButtons
            onClickLeft={() => {
              console.log("записались");
            }}
            onClickRight={redirectSpa}
          />
        }
      >
        <AccordionCard
          imageSrc="https://sun9-30.userapi.com/impg/LGnJN5WDoEtWMQzxSCN7Wh_WLlR5cBUxo2MXzA/nFwgPqIIzlk.jpg?size=1280x960&quality=95&sign=2f9eb1687bd4a8c0da11c55535b4a657&type=album"
          itemsList={test}
        />
      </Accordion>
    </SectionContainer>
  );
};

export default ServicesPage;
