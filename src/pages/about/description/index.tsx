import BackButton from "@/components/BackButton/BackButton";
// import styles from "./styles.module.scss";
import InfoHeader from "@/components/InfoHeader/InfoHeader";
import Accordion from "@/components/Accordion/Accordion";
import AccordionCard from "@/components/AccordionCard/AccordionCard";
import AccordionItemButtons from "@/components/AccordionItemButtons/AccordionItemButtons";
import SectionContainer from "@/components/SectionContainer/SectionContainer";

const test = [
  "Услуга",
  "Услуга Клево Супер Длинно Слова",
  "УслугаУслугаУслугаУслуга",
  "Массаж",
  "Массаж",
  "Массаж",
];

const url =
  "https://sun9-35.userapi.com/impg/q-3zqxvqHk_rq7pwKlwvjbYnaWOXypSmFymung/x_7mExM4DUU.jpg?size=2560x1706&quality=95&sign=89e20a6d815d8e8de1559ad6c171b655&type=album";

const DescriptionPage = () => {
  return (
    <SectionContainer>
      <BackButton />
      <InfoHeader title="Grand Karat Sochi" category="Описание" />
      <Accordion
        text="Адреса"
        footer={
          <AccordionItemButtons
            onClickLeft={() => {
              console.log("записались");
            }}
            onClickRight={() => {
              console.log("редирект");
            }}
          />
        }
      >
        <AccordionCard imageSrc={url} itemsList={test} />
      </Accordion>

      <Accordion
        text="Массаж"
        footer={
          <AccordionItemButtons
            onClickLeft={() => {
              console.log("записались");
            }}
            onClickRight={() => {
              console.log("редирект");
            }}
          />
        }
      >
        <AccordionCard imageSrc={url} itemsList={test} />
      </Accordion>

      <Accordion
        text="Спортзал"
        footer={
          <AccordionItemButtons
            onClickLeft={() => {
              console.log("записались");
            }}
            onClickRight={() => {
              console.log("редирект");
            }}
          />
        }
      >
        <AccordionCard imageSrc={url} itemsList={test} />
      </Accordion>
    </SectionContainer>
  );
};

export default DescriptionPage;
