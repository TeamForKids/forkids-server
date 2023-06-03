import Place from '../models/Place';
import { PlaceResponseDto } from '../interfaces/place/PlaceResponeDto';

const getPlaceByGu = async (
  guName: string
): Promise<PlaceResponseDto | null> => {
  try {
    const places = await Place
        .find({ address: new RegExp(guName, 'i') })
        .select('id')
        .exec();

    const data = {
        id: place.placeId,
    }
    return data;
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getPlaceByGu,
};
