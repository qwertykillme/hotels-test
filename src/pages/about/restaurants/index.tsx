import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Accordion from "@/components/Accordion/Accordion";
import AccordionCard from "@/components/AccordionCard/AccordionCard";
import AccordionItemButtons from "@/components/AccordionItemButtons/AccordionItemButtons";
import BackButton from "@/components/BackButton/BackButton";
import InfoHeader from "@/components/InfoHeader/InfoHeader";

const test = [
  "Барбекю",
  "Морепродукты Клево Супер Длинно Слова",
  `λοπαδοτεμαχοσελαχογαλεο-κρανιολειψανοδριμυποτριμματο-σιλφιοκαραβομελιτοκατακεχυμενο-κιχλεπικοσσυφοφαττοπεριστερα-λεκτρυονοπτοκεφαλλιοκιγκλοπε-λειολαγῳοσιραιοβαφητραγα-νοπτερύγων`,
  "Выпечка",
];

const url =
  "https://sun9-35.userapi.com/impg/q-3zqxvqHk_rq7pwKlwvjbYnaWOXypSmFymung/x_7mExM4DUU.jpg?size=2560x1706&quality=95&sign=89e20a6d815d8e8de1559ad6c171b655&type=album";
const RestaurantPage = () => {
  return (
    <SectionContainer>
      <BackButton />
      <InfoHeader title="Grand Karat Sochi" category="Рестораны" />
      <Accordion
        text="Крутой ресторан"
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
        text="Лучший ресторан"
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
        text="Потрясающий ресторан"
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

export default RestaurantPage;
