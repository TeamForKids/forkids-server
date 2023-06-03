import mongoose from 'mongoose';
import { TopPlaceInfo } from '../interfaces/topplace/TopPlaceInfo';

const TopPlaceSchema = new mongoose.Schema({
    //장소명
    name: {
    type: String,
    required: true,
  },
});

export default mongoose.model<TopPlaceInfo & mongoose.Document>('TopPlace', TopPlaceSchema);
