import Place from '../models/Place';
import { PlaceResponseDto } from '../interfaces/place/PlaceResponseDto';

const getPlaceByGu = async (
  guName: string
): Promise<PlaceResponseDto | null> => {
  try {
    guName = guName.trim();
    
    const places = await Place.find({ address: new RegExp(guName, 'i') })

    if (!places) {
      return null;
    }
    const data = places.map(place => ({
      id: place.id,
      name: place.name,
      placeType: place.placeType,
      address: place.address,
      operatingHour: place.operatingHour,
      telephone: place.telephone,
      fee: place.fee,
      detailUrl: place.detailUrl
    }));
    
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getPlaceByGu,
};
