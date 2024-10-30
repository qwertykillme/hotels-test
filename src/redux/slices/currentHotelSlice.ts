import { IHotelRes } from "@redux/services/hotelsService/response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: IHotelRes  = {
  id: null,
  created_at: "",
  updated_at: "",
  hotel_name: "",
  description: "",
  city: "",
  address: "",
  review_mark: null,
  geo_mark: "",
  food_schedule: [],
  stars: null,
  bot_id: "",
  wifi_list: [],
  service_list: [],
}

const currentHotelSlice = createSlice({
    name: "currentHotel",
    initialState,
    reducers: {
      setCurrentHotel: (state, action: PayloadAction<IHotelRes>) => {
        state.id = action.payload.id;
        state.created_at = action.payload.created_at;
        state.updated_at = action.payload.updated_at;
        state.hotel_name = action.payload.hotel_name;
        state.description = action.payload.description;
        state.city = action.payload.city;
        state.review_mark = action.payload.review_mark;
        state.geo_mark = action.payload.geo_mark;
        state.food_schedule = action.payload.food_schedule;
        state.stars = action.payload.stars;
        state.bot_id = action.payload.bot_id;
        state.wifi_list = action.payload.wifi_list;
        state.service_list = action.payload.service_list;
      },
    },
  });


    export const { setCurrentHotel } = currentHotelSlice.actions;
    export default currentHotelSlice.reducer;