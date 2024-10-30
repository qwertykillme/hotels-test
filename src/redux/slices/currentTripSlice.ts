import { IHotelRoom, ITripRes } from "@redux/services/hotelsService/response";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ITripRes = {
  id: null,
  created_at: "",
  updated_at: "",
  is_archived: false, 
  adult_count: null,
  child_count: null,
  begin_at: "",
  end_at: "",
  room: null,
  user_id: null,
  hotel_id: null,
};

const currentTripSlice = createSlice({
  name: "currentTrip",
  initialState,
  reducers: {
    setCurrentTrip: (state, action: PayloadAction<ITripRes>) => {
      state.id = action.payload.id;
      state.created_at = action.payload.created_at;
      state.updated_at = action.payload.updated_at;
      state.is_archived = action.payload.is_archived;
      state.adult_count = action.payload.adult_count;
      state.child_count = action.payload.child_count;
      state.begin_at = action.payload.begin_at;
      state.end_at = action.payload.end_at;
      state.room = action.payload.room;
      state.user_id = action.payload.user_id;
      state.hotel_id = action.payload.hotel_id;
    },
    setCurrentRoom: (state, action: PayloadAction<IHotelRoom>) => {
      state.room = action.payload.room;
    },
  },
});

export const { setCurrentTrip, setCurrentRoom } = currentTripSlice.actions;
export default currentTripSlice.reducer;
