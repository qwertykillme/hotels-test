import { apiSlice } from "@redux/slices/apiSlice";
import { THotelsResponse } from "./response";
export const hotelsAPIService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHotels: builder.query<THotelsResponse, void>({
        query: () => ({
            url: 'hotels',
            method: "GET",
        }),
      }),
    }),
    overrideExisting: false, // Не перезаписывать существующие эндпоинты
});