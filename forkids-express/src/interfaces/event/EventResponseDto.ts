import mongoose from "mongoose";

export interface EventResponseDto{
    id: String;
    themaCode: String;
    name: String;
    placeName: String;
    guName: String;
    ageInfo: String;
    fee: String;
    cast: String;
    programInfo: String;
    detailUrl: String;
    bookingStart: String;
    startDate: String;
    endDate: String;
}