import hotelControllers from "@/controllers/hotels.controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const hotelsRouter = Router();

hotelsRouter.all('/*')
hotelsRouter.get('/', authenticateToken, hotelControllers.findHotels);
hotelsRouter.get('/:hotelId', authenticateToken, hotelControllers.findHotelById)

export { hotelsRouter }