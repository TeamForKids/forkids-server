import mongoose from "mongoose";
export interface PlaceInfo{
    _id: string;
    name: string;
    placeType: string;
    //placeImg: string;
    address: string;
    telePhone: string;
    detailUrl: string;
    operatingHour: string;
    // fee: string;
    // rating: string;
    // ratingCount: Number;
    //reviews: string[];
    //reviewCount: Number;
    //reviewDate: string[];
    //keywordReviews: string[];
}