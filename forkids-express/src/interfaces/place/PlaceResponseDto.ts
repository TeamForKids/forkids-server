//import { ParkingInfo } from './../parking/ParkingInfo';
import mongoose from "mongoose";

export interface PlaceResponseDto{
    id: String;
    name: String;
    placeType: String;
    //placeImg: String;
    address: String;
    telephone: String;
    detailUrl: String;
    operatingHour: String;
    fee: String;
    //parking: ParkingInfo;
}