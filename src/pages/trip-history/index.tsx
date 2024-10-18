import BackButton from "@components/BackButton/BackButton";
import SectionContainer from "@components/SectionContainer/SectionContainer";
import TripHistory from "@components/TripHistory";

const TripHistoryPage = () => {
  return (
    <SectionContainer>
      <BackButton />
      <TripHistory/>
    </SectionContainer>
  );
};

export default TripHistoryPage;
