import Event from '../models/Event';
import { EventResponseDto } from '../interfaces/event/EventResponseDto';

const getEventByDate = async ( 
    date: string
 ): Promise<EventResponseDto[] | null> => {
  try {
    const events = await Event.find({startDate: date});
    
    if (!events) {
      return null;
    }

    const data = events.map(event => ({
      id: event._id,
      name: event.name,
      startDate: event.startDate,
    }));

    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};


export default {
  getEventByDate,
};
