import { Request, Response } from "express";
import { crearReserva, obtenerReservas } from "../services/reservas";

export const crearReservaController = async (req: Request, res: Response) => {
  try {
    const response = await crearReserva(req.body);
    if (response.message === "Cancha ya reservada en el intervalo de tiempo seleccionado") {
      return res.status(409).send(response.message);
    }
    return res.send(response.response);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerReservasController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await obtenerReservas();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
