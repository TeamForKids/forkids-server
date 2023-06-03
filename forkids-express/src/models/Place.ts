import mongoose from 'mongoose';
import { PlaceInfo } from '../interfaces/place/PlaceInfo';

const PlaceSchema = new mongoose.Schema({
    //장소명
    name: {
    type: String,
    required: true,
  },
  //장소타입
  placeType: {
    type: String,
    required: true,
  },
  //대표이미지
  placeImg: {
    type: String,
    required: true,
  },
  //주소
  address: {
    type: String,
    required: true,
  },
  //전화번호
  telePhone: {
    type: Integer,
    required: true,
  },
  //상세페이지url
  detailUrl: {
    type: String,
    required: true,
  },
  //운영시간
  operatingHour: {
    type: String,
    required: true,
  },
  //이용요금
  fee: {
    type: String,
    required: true,
  },
  //별점
  rating: {
    type: Integer,
    required: true,
  },
  //별점평가수
  ratingCount: {
    type: Integer,
    required: true,
  },
  //리뷰
  reviews: {
    type: String[],
    required: true,
  },
  //방문자리뷰수
  reviewCount: {
    type: Integer,
    required: true,
  },
  //리뷰 작성일자
  reviewDate: {
    type: String[],
    required: true,
  },
  //키워드리뷰
  keywordReviews: {
    type: String[],
    required: true,
  },
});

export default mongoose.model<PlaceInfo & mongoose.Document>('Place', PlaceSchema);
