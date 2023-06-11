import Event from '../models/Event';
import Place from '../models/Place';
import Parking from '../models/Parking';
import { EventResponseDto } from '../interfaces/event/EventResponseDto';
import { PlaceResponseDto } from '../interfaces/place/PlaceResponseDto';
import { ParkingResponseDto } from '../interfaces/parking/ParkingResponseDto';

const getPlaceByName = async ( 
    placeName: string
 ): Promise<PlaceResponseDto | null> => {
  try { 
    const places = await Place.findOne({name: placeName});
    
    if (!places) {
      return null;
    }

    const data = {   
      id: places.id,
      name: places.name,
      placeType: places.placeType,
      address: places.address,
      operatingHour: places.operatingHour,
      telephone: places.telephone
    };

    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getParkingById = async ( 
    parkingId: string
 ): Promise<ParkingResponseDto | null> => {
  try { 
    const parkings = await Parking.findOne({_id: parkingId});
    
    if (!parkings) {
      return null;
    }

    const data = {
        id: parkings.id,
        parkingCode: parkings.parkingCode,   
        name: parkings.name,
        address: parkings.address,
        pTypeName: parkings.pTypeName,
        opName: parkings.opName,
        telePhone: parkings.telePhone,
        payName: parkings.payName,
        wDayStart: parkings.wDayStart,
        wDayClose: parkings.wDayClose,
        wEndStart: parkings.wEndStart,
        wEndClose: parkings.wEndClose,
        hDayStart: parkings.hDayStart,
        hDayClose: parkings.hDayClose,
        satPayYN: parkings.satPayYN,
        holPayName: parkings.holPayName,
        fee: parkings.fee,
        time: parkings.time,
        addFee: parkings.addFee,
        addTime: parkings.addTime,
        dayMax: parkings.dayMax
      };
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getPlaceByName,
  getParkingById,
};
