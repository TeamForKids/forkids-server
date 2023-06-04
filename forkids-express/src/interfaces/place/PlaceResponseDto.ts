import mongoose from "mongoose";

export interface PlaceResponseDto{
    id: String;
    name: String;
    placeType: String;
    //placeImg: String;
    address: String;
    telePhone: String;
    operatingHour: String;
}