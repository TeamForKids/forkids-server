import { Request, Response } from 'express';
import message from '../modules/responseMessage';
import { default as sc, default as statusCode } from '../modules/statusCode';
import util from '../modules/util';
import { validationResult } from 'express-validator';
import ChatService from '../services/ChatService';

/**
 *  @route GET /chat/detailPlace
 *  @desc Read placeinfo detail
 *  @access Public
 */
const getPlaceByName = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  try {
    const placeName = req.body.name;
    const data = await ChatService.getPlaceByName(placeName);
    if (!data) {
      return res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_PLACE_DETAIL_SUCCESS, data));

  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @route GET /chat/detailInfo/:parkingId
 *  @desc Read parkinginfo detail
 *  @access Public
 */
 const getParkingById = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
  
    try {
      const parkingId = req.params.parkingId;
      const data = await ChatService.getParkingById(parkingId);
      if (!data) {
        return res
          .status(statusCode.NOT_FOUND)
          .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
      }
  
      res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, message.READ_PARKING_DETAIL_SUCCESS, data));
  
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            message.INTERNAL_SERVER_ERROR
          )
        );
    }
  };
  
export default {
  getPlaceByName,
  getParkingById,
}; 
