export type THotelsResponse = IHotelRes[] 

export interface IHotelRes {
    id: number,
    created_at: string,
    updated_at: string,
    hotel_name: string,
    description: string,
    city: string,
    address: string,
    review_mark: number,
    geo_mark: string,
    food_schedule: string,
    stars: number,
    bot_id: string,
    wifi_list: IWiFiHotelRes[]
}

export interface IWiFiHotelRes {
    id: number,
    created_at: string,
    updated_at: string,
    hotel_id: number,
    location: string,
    wifi_name: string,
    wifi_password: string
}