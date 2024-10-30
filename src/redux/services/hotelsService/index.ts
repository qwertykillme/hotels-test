import { apiSlice } from "@redux/slices/apiSlice";
import {
  IHotelRes,
  IServiceRes,
  ITripReq,
  ITripRes,
  IUserRes,
  THotelsResponse,
  TServicesResponse,
  TTripsResponse,
} from "./response";
export const hotelsAPIService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHotels: builder.query<THotelsResponse, void>({
      query: () => ({
        url: "hotels/",
        method: "GET",
      }),
    }),

    getHotelByHotelId: builder.query<IHotelRes, { id: number }>({
      query: ({ id }) => ({
        url: `hotels/${id}`,
        method: "GET",
      }),
    }),
    
    getTripByTripId: builder.query<ITripRes, { id: number }>({
      query: ({ id }) => ({
        url: `trips/${id}`,
        method: "GET",
      }),
    }),

    createTrip: builder.query<ITripRes, ITripReq>({
      query: (body) => ({
        url: `trips/`,
        method: "POST",
        body,
      }),
    }),

    getTripsByUserId: builder.query<TTripsResponse, { userId: number }>({
      query: ({ userId }) => ({
        url: `trips/user/${userId}`,
        method: "GET",
      }),
    }),

    getUserById: builder.query<IUserRes, {userId: number}>({
      query: ({ userId }) => ({
        url: `users/${userId}`,
        method: "GET",
      }),
    }),
    
    sendUser: builder.query<IUserRes, {userName: string, roleId: number}>({
      query: ({ userName, roleId}) => ({
        url: "users",
        method: "POST",
        body: { userName, roleId},
      }),
    }),

    getServices:  builder.query<TServicesResponse, {skip?: number, limit?: number}>({
      query: ({ skip, limit }) => {
        const queryParams = [];
        if (typeof skip !== 'undefined') {
          queryParams.push(`skip=${skip}`);
        }
        if (typeof limit !== 'undefined') {
          queryParams.push(`limit=${limit}`);
        }
        const queryString = queryParams.length ? `/?${queryParams.join('&')}` : '';
        return {
          url: `services${queryString}`,
          method: "GET",
        };
      },
    }),

    getServiceById: builder.query<IServiceRes, { serviceId: number}>({
      query: ({ serviceId }) => ({
        url: `services/${serviceId}`,
        method: "GET",
      }),
    }),

    
  }),
  overrideExisting: false, // Не перезаписывать существующие эндпоинты
});
