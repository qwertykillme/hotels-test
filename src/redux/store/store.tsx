import { configureStore } from "@reduxjs/toolkit";
import currentTripReducer from "../slices/currentTripSlice";
import currentHotelReducer from "../slices/currentHotelSlice"
import { apiSlice } from "@redux/slices/apiSlice";


const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    currentTrip: currentTripReducer,
    currentHotel: currentHotelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
