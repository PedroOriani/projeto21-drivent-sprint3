import { notFoundError, PaymentRequired } from "@/errors";
import { enrollmentRepository, ticketsRepository } from "@/repositories";
import hotelRepositories from "@/repositories/hotels.repository"

async function findHotels(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
    if (!ticket) throw notFoundError();

    if (ticket.status === "RESERVED") throw PaymentRequired()

    if (ticket.TicketType.isRemote === true) throw PaymentRequired()
    
    if (ticket.TicketType.includesHotel === false) throw PaymentRequired()

    const hotels = await hotelRepositories.findHotels();

    if (hotels.length === 0) throw notFoundError();

    return hotels    
}

async function findHotelById(userId: number, hotelId: number) {

    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
    if (!ticket) throw notFoundError();

    if (ticket.status === "RESERVED") throw PaymentRequired()

    if (ticket.TicketType.isRemote === true) throw PaymentRequired()

    if (ticket.TicketType.includesHotel === false) throw PaymentRequired()

    const hotel = await hotelRepositories.findHotelById(hotelId);
    if (!hotel) throw notFoundError();

    return hotel
}

const hotelServices = {
    findHotels,
    findHotelById
}

export default hotelServices