export type THotelsResponse = IHotelRes[];
export type TTripsResponse = ITripRes[];
export type TWifisResponse = IWiFiHotelRes[];
export type TServicesResponse = IServiceRes[];
export type TFoodScheduleResponse = IFoodScheduleRes[];

export interface IHotelRes {
  id: number | null;
  created_at: string;
  updated_at: string;
  hotel_name: string;
  description: string;
  city: string;
  address: string;
  review_mark: number | null;
  geo_mark: string;
  food_schedule: TFoodScheduleResponse;
  stars: number | null;
  bot_id: string;
  wifi_list: TWifisResponse;
  service_list: TServicesResponse;
}

export interface IHotelRoom {
  room: number | null
}

export interface IWiFiHotelRes {
  id: number | null;
  created_at: string;
  updated_at: string;
  hotel_id: number | null;
  location: string;
  wifi_name: string;
  wifi_password: string;
}

export interface IFoodScheduleRes {
  id: number | null,
  hotel_id: number | null,
  location: string | null,
  what: string,
  when: string,
}

export interface IServiceRes {
  id: number | null;
  created_at: string;
  updated_at: string;
  hotel_id: number | null;
  name: string;
  short_description: string;
  full_description: string;
  pdf_link: string;
  price: number | null;
  photo_list: IImageRes[];
}

export interface ITripRes {
  id?: number | null;
  created_at: string;
  updated_at: string;
  is_archived: boolean;
  adult_count: number | null,
  child_count: number | null,
  begin_at: string;
  end_at: string;
  room:  number | null;
  user_id: number | null;
  hotel_id: number | null;
}

//todo
export interface ITripReq {
  adult_count: number | null;
  child_count: number | null;
  begin_at: string;
  end_at: string;
  user_id: number | null;
  hotel_id: number | null;
}

export interface IUserRes {
  id: number | null;
  created_at: string;
  updated_at: string;
  user_name: string;
  role: {
    id: number | null;
    role_name: string;
    created_at: string;
  };
}

export interface IImageRes {
  id: number | null;
  created_at: string;
  updated_at: string;
  foreign_id: number | null;
  foreign_type: string;
  url: string;
}
