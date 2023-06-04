import mongoose from "mongoose";

export interface ParkingInfo{
    id: string;
    parkingCode: Number;
    name: string;
    address: string;
    pTypeName: string;
    opName: string;
    telePhone: string;
    payName: string;
    wDayStart: Number;
    wDayClose: Number;
    wEndStart: Number;
    wEndClose: Number;
    hDayStart: Number;
    hDayClose: Number;
    satPayYN: string;
    holPayName: string;
    fee: Number;
    time: Number;
    addFee: Number;
    addTime: Number;
    dayMax: Number;
}