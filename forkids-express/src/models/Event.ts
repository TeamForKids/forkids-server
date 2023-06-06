import mongoose from 'mongoose';
import { EventInfo } from '../interfaces/event/EventInfo';

const EventSchema = new mongoose.Schema({
    //행사종류
    themaCode: {
      type: String,
      required: true,
    },
    //행사명
    name: {
      type: String,
      required: true,
    },
    placeName: {
        type: String,
        required: true,
      },
    //지역구
    guName: {
      type: String,
      required: true,
    },
    //연령제한정보
    ageInfo: {
      type: String,
      required: true,
    },
    //이용요금정보
    fee: {
      type: String,
      required: true,
    },
    //출연진
    cast: {
      type: String,
      required: true,
    },
    //공연상세정보
    programInfo: {
      type: String,
      required: true,
    },
    //사이트 바로가기
    detailUrl: {
      type: String,
      required: true,
    },
    //신청시작일
    bookingStart: {
      type: String,
      required: true,
    },
    //행사시작일
    startDate: {
      type: String,
      required: true,
    },
    //행사종료일
    endDate: {
        type: String,
        required: true,
      },
  });

export default mongoose.model<EventInfo & mongoose.Document>('Event', EventSchema);
