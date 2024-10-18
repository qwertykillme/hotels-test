import { RootState } from "@redux/store/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface TripState {
  currentHotel: string;
  currentRoom: string | number;
  daysBeforeCheckout: string | number;
}

const initialState: TripState = {
  currentHotel: "",
  currentRoom: "",
  daysBeforeCheckout: 0,
};

const currentTripSlice = createSlice({
  name: "currentTrip",
  initialState,
  reducers: {
    setCurrentHotel: (state, action: PayloadAction<string>) => {
      state.currentHotel = action.payload;
    },
    setCurrentRoom: (state, action: PayloadAction<string | number>) => {
      state.currentRoom = action.payload;
    },
    setDaysBeforeCheckout: (state, action: PayloadAction<string | number>) => {
      state.daysBeforeCheckout = action.payload;
    },
  },
});

export const selectCurrentHotel = (state: RootState) =>
  state.currentTrip.currentHotel;
export const selectCurrentRoom = (state: RootState) =>
  state.currentTrip.currentRoom;
export const selectDaysBeforeCheckout = (state: RootState) =>
  state.currentTrip.daysBeforeCheckout;

export const { setCurrentHotel, setCurrentRoom, setDaysBeforeCheckout } =
  currentTripSlice.actions;
export default currentTripSlice.reducer;
