import { prisma } from "@/config"

async function findHotels() {
    const hotels = await prisma.hotel.findMany();
    
    return hotels
}


async function findHotelById(id: number) {
    const hotel = await prisma.hotel.findUnique({
        where: {
            id
        },
        include: {
            Rooms: true
        }
    })

    return hotel;
}

const hotelRepositories = {
    findHotels,
    findHotelById
}

export default hotelRepositories