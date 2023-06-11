import Place from '../models/Place';
import { PlaceResponseDto } from '../interfaces/place/PlaceResponseDto';

const getPlaceByGu = async (
  guName: string
): Promise<PlaceResponseDto[] | null> => {
  try {
    guName = guName.trim();
    
    const places = await Place.find({ address: new RegExp(guName, 'i') })

    if (!places) {
      return null;
    }
    const data = places.map(place => ({
      id: places.id,
      name: places.name,
      placeType: places.placeType,
      address: places.address,
      operatingHour: places.operatingHour,
      telephone: places.telephone,
      fee: places.fee
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
