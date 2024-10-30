import AddTrip from "@components/AddTrip";
import BackButton from "@components/BackButton/BackButton";
import SectionContainer from "@components/SectionContainer/SectionContainer";


const AddTripPage = () => {
  return (
      <SectionContainer>
        <BackButton />
        <AddTrip />
      </SectionContainer>
  );
};

export default AddTripPage;
