import BackButton from "@/components/BackButton/BackButton";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ServiceSpecificCard from "@components/ServiceSpecificCard/ServiceSpecificCard";
//brjyrb

const ServicePage = () => {
  return (
    <SectionContainer>
      <BackButton />
      <ServiceSpecificCard/>
    </SectionContainer>
  );
};


export default ServicePage;
