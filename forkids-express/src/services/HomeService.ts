import TopPlace from '../models/TopPlace';
import { TopPlaceResponseDto } from '../interfaces/topplace/TopPlaceResponeDto';

const getHome = async (
  topplaceId: string
): Promise<TopPlaceResponseDto | null> => {
  try {
    const topplace = await TopPlace.findById(topplaceId).limit(10);

    if (!topplace) {
      return null;
    }

    const data = {
      id: topplace.topplaceId,
      name: topplace.name,
    };
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getHome,
};
