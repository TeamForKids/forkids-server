import mongoose from "mongoose";

export interface EventInfo{
    id: string;
    themaCode: string;
    name: string;
    placeName: string;
    guName: string;
    ageInfo: string;
    fee: string;
    cast: string;
    programInfo: string;
    detailUrl: string;
    bookingStart: string;
    startDate: string;
    endDate: string;
}