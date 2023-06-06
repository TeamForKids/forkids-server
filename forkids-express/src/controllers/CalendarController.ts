import { Request, Response } from 'express';
import message from '../modules/responseMessage';
import { default as sc, default as statusCode } from '../modules/statusCode';
import util from '../modules/util';
import { validationResult } from 'express-validator';
import CalendarService from '../services/CalendarService';

/**
 *  @route GET /calendar/event/date
 *  @desc Read Event Info by date
 *  @access Public
 */
const getEventByDate = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  try {
    const date = req.body.date;
    const data = await CalendarService.getEventByDate(date);
    if (!data) {
      return res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_DATE_EVENT_SUCCESS, data));

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
 *  @route GET /calendar/event/today
 *  @desc Read Event Info Today
 *  @access Public
 */
 const getEventToday = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
  
    try {
      const data = await CalendarService.getEventToday();
      if (!data) {
        return res
          .status(statusCode.NOT_FOUND)
          .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
      }
  
      res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, message.READ_TODAY_EVENT_SUCCESS, data));
  
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
  getEventByDate,
  getEventToday
}; 
