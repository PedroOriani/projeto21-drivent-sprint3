import { AuthenticatedRequest } from "@/middlewares";
import hotelServices from "@/services/hotels.services"
import { Response } from "express"
import httpStatus from "http-status";

async function findHotels(req: AuthenticatedRequest, res: Response) {
    const { userId } = req
    const hotels = await hotelServices.findHotels(userId);

    res.status(httpStatus.OK).send(hotels)
}


async function findHotelById(req: AuthenticatedRequest, res: Response) {
    const { userId } = req
    const { hotelId } = req.params

    const id = Number(hotelId)

    const hotel = await hotelServices.findHotelById(userId, id);

    res.status(httpStatus.OK).send(hotel)
}

const hotelControllers = {
    findHotels,
    findHotelById
}

export default hotelControllers