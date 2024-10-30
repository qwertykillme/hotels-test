import BackButton from "@/components/BackButton/BackButton";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import InfoHeader from "@/components/InfoHeader/InfoHeader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store/store";
import { useEffect } from "react";
import ServiceCard from "@components/ServiceCard/ServiceCard";



const ServicesPage = () => {
  const currentHotel = useSelector((state: RootState) => state.currentHotel.hotel_name);
  const navigate = useNavigate();


  useEffect(() => {
    if(!currentHotel) navigate(`/trip`);
  }, [currentHotel, navigate])
  
  return (
    <SectionContainer>
      <BackButton />
      <InfoHeader title={currentHotel} category="Услуги" />
      <ServiceCard/>
    </SectionContainer>
  );
};

export default ServicesPage;
