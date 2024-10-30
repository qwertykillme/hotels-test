import SectionContainer from "@/components/SectionContainer/SectionContainer";
import BackButton from "@/components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store/store";
import { useEffect } from "react";
import RestaurantCard from "@components/RestaurantsCard/RestaurantCard";

const RestaurantPage = () => {
  const currentHotel = useSelector((state: RootState) => state.currentHotel.hotel_name);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!currentHotel) navigate(`/trip`);
  }, [currentHotel, navigate])

  return (
    <SectionContainer>
      <BackButton />
      <RestaurantCard/>
    </SectionContainer>
  );
};

export default RestaurantPage;
