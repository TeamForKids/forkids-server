import mongoose from "mongoose";
export interface TopPlaceInfo{
    _id: string;
    name: string;
    placeType: string;
    address: string;
    telePhone: string;
    detailUrl: string;
    operatingHour: string;
    fee: string;
    rating: string;
    ratingCount: Number;
    reviews: string[];
    reviewCount: Number;
    reviewDate: string[];
    keywordReviews: string[];  
}