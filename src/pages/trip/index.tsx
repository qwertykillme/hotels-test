import BackButton from "@components/BackButton/BackButton";
import ButtonGetInTouch from "@components/ButtonGetInTouch/ButtonGetInTouch";
import HotelCard from "@components/HotelCard/HotelCard";
import SectionContainer from "@components/SectionContainer/SectionContainer";

import { ReactComponent as GetInTouchIcon } from "@/assets/svg/contact.svg";
import { hotelsAPIService } from "@redux/services/hotelsService";
import { setCurrentHotel } from "@redux/slices/currentHotelSlice";
import { setCurrentTrip } from "@redux/slices/currentTripSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useTripId from "helpers/useTripId";

const TripPage = () => {
  
  const [getTripByTripId, { data: tripById, isSuccess: isTripSuccess }] =hotelsAPIService.useLazyGetTripByTripIdQuery();
  const [getHotelByHotelId, { data: hotelByHotelId, isSuccess: isHotelSuccess }] = hotelsAPIService.useLazyGetHotelByHotelIdQuery();
  const id = useTripId()
  // const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  //api запросы

  // useEffect(() => {
  //   (async () => {
  //     if (id) await getTripByTripId({ id: +id });
  //     if (tripById?.hotel_id) {
  //       dispatch(setCurrentTrip(tripById));
  //       await getHotelByHotelId({ id: tripById.hotel_id });
  //     }
  //     if (hotelByHotelId) {
  //       dispatch(setCurrentHotel(hotelByHotelId));
  //     }
  //   })();
  // }, [dispatch, getTripByTripId, getHotelByHotelId, tripById, hotelByHotelId]);

  useEffect(() => {
    id ? getTripByTripId({id}) : getTripByTripId({id: 1})
  }, [id, getTripByTripId])

  useEffect(() => {
    if (tripById?.hotel_id) {
      dispatch(setCurrentTrip(tripById));
      getHotelByHotelId({id: tripById.hotel_id});
    }
  }, [tripById, getHotelByHotelId, dispatch])

  useEffect(() => {
    if (hotelByHotelId) dispatch(setCurrentHotel(hotelByHotelId))
  }, [hotelByHotelId, dispatch])

  return (
    <SectionContainer>
      <BackButton />
      {isTripSuccess && isHotelSuccess && (
        <>
          <HotelCard />
          <ButtonGetInTouch
            Icon={GetInTouchIcon}
            customStyles={{ marginTop: "auto" }}
          />
        </>
      )}
    </SectionContainer>
  );
};

export default TripPage;
