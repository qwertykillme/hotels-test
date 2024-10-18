import Accordion from "@/components/Accordion/Accordion";
import AccordionCard from "@/components/AccordionCard/AccordionCard";
import BackButton from "@/components/BackButton/BackButton";
import Gallery from "@/components/Gallery/Gallery";
import InfoHeader from "@/components/InfoHeader/InfoHeader";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import AccordionCardServicePrice from "@/components/AccordionCardServicePrice/AccordionCardServicePrice";

//brjyrb
import { ReactComponent as DownloadIcon } from "../@/assets/svg/download.svg";

const links = [
  "https://sun9-35.userapi.com/impg/q-3zqxvqHk_rq7pwKlwvjbYnaWOXypSmFymung/x_7mExM4DUU.jpg?size=2560x1706&quality=95&sign=89e20a6d815d8e8de1559ad6c171b655&type=album",
  "https://sun9-55.userapi.com/impg/JEKr5MtKhn4_f2m-ec50qsVM0i-559hEnKZOfw/vsNXZA6hhmY.jpg?size=1439x2160&quality=95&sign=02e71e31837524f10fedf712089d9dff&type=album",
  "https://sun9-61.userapi.com/impg/itnlYuRxjTIkUSu4-hYM7GJ7d-XklTvzmF5pMg/Ys8ogkklKns.jpg?size=2560x1706&quality=95&sign=27d6704ede2388d20f4f1e8909984bd8&type=album",
  "https://sun9-35.userapi.com/impg/q-3zqxvqHk_rq7pwKlwvjbYnaWOXypSmFymung/x_7mExM4DUU.jpg?size=2560x1706&quality=95&sign=89e20a6d815d8e8de1559ad6c171b655&type=album",
  "https://sun9-42.userapi.com/impg/XSwgZs6ZEXDhjagbek5V1W4gTf4uR1fKJeKRTw/P0zEk0X9JJo.jpg?size=1439x2160&quality=95&sign=4d06e6ddf40eaeeaf4793c633b4af6ae&type=album",
  "https://sun9-61.userapi.com/impg/itnlYuRxjTIkUSu4-hYM7GJ7d-XklTvzmF5pMg/Ys8ogkklKns.jpg?size=2560x1706&quality=95&sign=27d6704ede2388d20f4f1e8909984bd8&type=album",
  "https://sun9-35.userapi.com/impg/q-3zqxvqHk_rq7pwKlwvjbYnaWOXypSmFymung/x_7mExM4DUU.jpg?size=2560x1706&quality=95&sign=89e20a6d815d8e8de1559ad6c171b655&type=album",
  "https://sun9-74.userapi.com/impg/44hqD6RxlwfuRmoo-z_seW6vTo0xLD-JOJNjwg/b1DKKMUbrQk.jpg?size=1439x2160&quality=95&sign=ba215d346d600d5901270a2014752fd4&type=album",
  "https://sun9-61.userapi.com/impg/itnlYuRxjTIkUSu4-hYM7GJ7d-XklTvzmF5pMg/Ys8ogkklKns.jpg?size=2560x1706&quality=95&sign=27d6704ede2388d20f4f1e8909984bd8&type=album",
];
const SpaPage = () => {
  return (
    <SectionContainer>
      <BackButton />
      <InfoHeader title="Grand Karat Sochi" category="CПА" />
      <Gallery title={"Галерея"} images={links} />
      <Accordion text="Услуги">
        <AccordionCard imageSrc="https://sun9-78.userapi.com/impg/Qb5fhvG_XZFjBfxAnDP6J101zX2TNemO95L2Iw/wXyGeZynitw.jpg?size=1127x657&quality=96&sign=d41562786f4b9337c700c9dd2b73f4d4&type=album">
          <AccordionCardServicePrice
            service="Массаж на прем. масле "
            price={5000}
            onClick={() => {
              console.log("я что-то делаю");
            }}
          />
        </AccordionCard>

        <AccordionCard imageSrc="https://sun9-26.userapi.com/impg/8Ik5I98W3YyuxSCF_G0ZxkiJk5WGn6rs4FsrYg/mACRG5BhhZ4.jpg?size=1080x1257&quality=95&sign=64c31b39a7368f74f85b1a6ba2bbe8bf&type=album">
          <AccordionCardServicePrice
            service="Массаж на норм. масле"
            price={5000}
            onClick={() => {
              console.log("я что-то делаю");
            }}
          />
        </AccordionCard>

        <AccordionCard imageSrc="https://sun9-73.userapi.com/impg/ND89UX392etDVG_d9Y-OhjlClqQhojIu4yvgvg/s1zaAsqcZC4.jpg?size=563x558&quality=96&sign=e2c40cedf6c778c375aef9c752931e1a&type=album">
          <AccordionCardServicePrice
            service={`Маска для лица
                        От какой-то имбы`}
            price={5000}
            onClick={() => {
              console.log("я что-то делаю");
            }}
          />
        </AccordionCard>

        <AccordionCard imageSrc="https://sun9-74.userapi.com/impg/uw4iiTJUfDtfCXYK6DGMgwo8yzG4Rd8qy7YM8g/Bf4op7HSJg4.jpg?size=1284x1547&quality=96&sign=54155c35b1e62a87bff7e283adf8e060&type=album">
          <AccordionCardServicePrice
            service={`Маска для лица
                            От какой-то имбы`}
            price={5000}
            onClick={() => {
              console.log("я что-то делаю");
            }}
          />
        </AccordionCard>
      </Accordion>
    </SectionContainer>
  );
};

export default SpaPage;
