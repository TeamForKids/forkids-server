import mongoose from "mongoose";
export interface PlaceInfo{
    name: string;
    placeType: string;
    placeImg: string;
    address: string;
    telePhone: Number;
    detailUrl: string;
    operatingHour: string;
    fee: string;
    rating: Number;
    ratingCount: Number;
    reviews: mongoose.Types.ObjectId[];
    reviewCount: Number;
    reviewDate: mongoose.Types.ObjectId[];
    keywordReviews: mongoose.Types.ObjectId[]
}