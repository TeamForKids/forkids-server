import mongoose from "mongoose";
export interface PlaceInfo{
    _id: string;
    name: string;
    placeType: string;
    //placeImg: string;
    address: string;
    telephone: string;
    detailUrl: string;
    operatingHour: string;
    //parking: mongoose.Types.ObjectId;
    // fee: string;
    // rating: string;
    // ratingCount: Number;
    //reviews: string[];
    //reviewCount: Number;
    //reviewDate: string[];
    //keywordReviews: string[];
}