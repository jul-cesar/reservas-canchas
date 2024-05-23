import { Request, Response } from "express";
import {
  crearReserva,
  obtenerReservas,
  obtenerReservasCancha,
  obtenerReservasUser,
  obtenerUnaReserva,
  updateReserva,
} from "../services/reservas";

export const crearReservaController = async (req: Request, res: Response) => {
  try {
    const response = await crearReserva(req.body);
    if (
      response.message ===
      "Cancha ya reservada en el intervalo de tiempo seleccionado"
    ) {
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

export const obtenerUnaReservaController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  try {
    const response = await obtenerUnaReserva(id);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerReservasUserController= async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  try {
    const response = await obtenerReservasUser(id);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerReservasCanchaController = async (
  req: Request,
  res: Response
) => {
  const IDCancha = parseInt(req.params.id);
  try {
    const response = await obtenerReservasCancha(IDCancha);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const updateReservaController = async (req: Request, res: Response) => {
  const IDCReserva = parseInt(req.params.id);
  try {
    const response = await updateReserva(IDCReserva, req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
