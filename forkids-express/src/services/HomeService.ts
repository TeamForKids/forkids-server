import TopPlace from '../models/TopPlace';
import { TopPlaceResponseDto } from '../interfaces/topplace/TopPlaceResponeDto';


const getHome = async (): Promise<TopPlaceResponseDto[] | null> => {
  try {
    const topplaces = await TopPlace.find().limit(10);

    if (!topplaces) {
      return null;
    }

    const data = topplaces.map(topplace => ({
      id: topplace.id,
      name: topplace.name,
    }));

    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};


export default {
  getHome,
};
