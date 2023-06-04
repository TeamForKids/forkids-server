import mongoose from "mongoose";

export interface TopPlaceResponseDto {
    _id: String;
    name: String;
    placeType: String;
    address: String;
    telePhone: String;
    detailUrl: String;
    operatingHour: String;
    fee: String;
    rating: String;
    ratingCount: Number;
    reviews: String[];
    reviewCount: Number;
    reviewDate: String[];
    keywordReviews: String[];
}