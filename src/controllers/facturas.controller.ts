import { Request, Response } from "express";
import { consultarFacturasReserva, consultarTodasLasFacturas } from "../services/facturas";

export const consultarFacturasReservaController = async (
  req: Request,
  res: Response
) => {
  const IDReserva = parseInt(req.params.idReserva);
  try {
    const response = await consultarFacturasReserva(IDReserva);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const consultarTodasLasFacturasController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await consultarTodasLasFacturas();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
