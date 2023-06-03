import mongoose from "mongoose";

export interface PlaceResponseDto{
    name: String;
    placeType: String;
    placeImg: String;
    address: String;
    telePhone: Number;
    detailUrl: String;
    operatingHour: String;
    fee: String;
    rating: Number;
    ratingCount: Number;
    reviews: mongoose.Types.ObjectId[];
    reviewCount: Number;
    reviewDate: mongoose.Types.ObjectId[];
    keywordReviews: mongoose.Types.ObjectId[]
}