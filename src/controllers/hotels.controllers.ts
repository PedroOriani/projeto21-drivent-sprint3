import { AuthenticatedRequest } from "@/middlewares";
import hotelServices from "@/services/hotels.services"
import { Response } from "express"

async function findHotels(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId
    const hotels = await hotelServices.findHotels(userId);

    res.status(200).send(hotels)
}


async function findHotelById(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId
    const { id } = req.params

    const hotelId = Number(id)

    const hotel = await hotelServices.findHotelById(userId, hotelId);

    res.status(200).send(hotel)
}

const hotelControllers = {
    findHotels,
    findHotelById
}

export default hotelControllers