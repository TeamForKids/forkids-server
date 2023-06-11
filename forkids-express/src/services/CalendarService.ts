import Event from '../models/Event';
import { EventResponseDto } from '../interfaces/event/EventResponseDto';
import { format } from 'date-fns';

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
      themaCode: event.themaCode,
      name: event.name,
      placeName: event.placeName,
      guName: event.guName,
      ageInfo: event.ageInfo,
      fee: event.fee,
      cast: event.cast,
      programInfo: event.programInfo,
      detailUrl: event.detailUrl,
      bookingStart: event.bookingStart,
      startDate: event.startDate,
      endDate: event.endDate
    }));

    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getEventToday = async (): Promise<EventResponseDto[] | null> => {
  try {

    const today = format(new Date(), 'yyyy.MM.dd')+' 0:00';
    const events = await Event.find({startDate: today});
    
    if (!events) {
      return null;
    }

    const data = events.map(event => ({
      id: event._id,
      themaCode: event.themaCode,
      name: event.name,
      placeName: event.placeName,
      guName: event.guName,
      ageInfo: event.ageInfo,
      fee: event.fee,
      cast: event.cast,
      programInfo: event.programInfo,
      detailUrl: event.detailUrl,
      bookingStart: event.bookingStart,
      startDate: event.startDate,
      endDate: event.endDate
    }));

    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getEventByDate,
  getEventToday
};
