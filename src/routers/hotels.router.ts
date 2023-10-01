import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const hotelsRouter = Router();

hotelsRouter.all('/*')
hotelsRouter.get('/', authenticateToken, );
hotelsRouter.get('/:hotelId', authenticateToken, )

export { hotelsRouter }