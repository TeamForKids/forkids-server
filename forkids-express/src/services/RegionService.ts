import Place from '../models/Place';
import { PlaceResponseDto } from '../interfaces/place/PlaceResponseDto';

const getPlaceByGu = async (
  guName: string
): Promise<PlaceResponseDto[] | null> => {
  try {
    guName = guName.trim();
    
    const places = await Place
        .find({ address: new RegExp(guName, 'i') })
        .select('_id')
        .exec();

    console.log(places)

    if (places.length > 0) {
        const data = places.map(place => {
            return { id: place._id.toString() }; // MongoDB의 _id는 ObjectId 형식이므로 toString()을 사용해 문자열로 변환합니다.
        });
        return data;
    }

    return null;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getPlaceByGu,
};
