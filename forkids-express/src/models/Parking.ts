import mongoose from 'mongoose';
import { ParkingInfo } from '../interfaces/parking/ParkingInfo';

const ParkingSchema = new mongoose.Schema({
    //장소명
    parkingCode: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pTypeName: {
    type: String,
    required: true,
  },
  opName: {
    type: String,
    required: true,
  },
  telePhone: {
    type: String,
    required: true,
  },
  payName: {
    type: String,
    required: true,
  },
  wDayStart: {
    type: Number,
    required: true,
  },
  wDayClose: {
    type: Number,
    required: true,
  },
  wEndStart: {
    type: Number,
    required: true,
  },
  wEndClose: {
    type: Number,
    required: true,
  },
  hDayStart: {
    type: Number,
    required: true,
  },
  hDayClose: {
    type: Number,
    required: true,
  },
  satPayYN: {
    type: String,
    required: true,
  },
  holPayName: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  addFee: {
    type: Number,
    required: true,
  },
  addTime: {
    type: Number,
    required: true,
  },
  dayMax: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<ParkingInfo & mongoose.Document>('Parking', ParkingSchema);
