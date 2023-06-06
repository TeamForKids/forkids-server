import mongoose from "mongoose";

export interface ParkingResponseDto{
    id: String;
    parkingCode: Number;
    name: String;
    address: String;
    pTypeName: String;
    opName: String;
    telePhone: String;
    payName: String;
    wDayStart: Number;
    wDayClose: Number;
    wEndStart: Number;
    wEndClose: Number;
    hDayStart: Number;
    hDayClose: Number;
    satPayYN: String;
    holPayName: String;
    fee: Number;
    time: Number;
    addFee: Number;
    addTime: Number;
    dayMax: Number;
}