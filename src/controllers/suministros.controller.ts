import { Request, Response } from "express";
import {
  crearCancha,
  editarUnaCancha,
  obtenerTodasLasCanchas,
  obtenerUnaCancha,
} from "../services/canchas";
import { insertarSuministros, obtenerSuministros } from "../services/suministros";

export const insertarSuministrosController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await insertarSuministros(req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
export const obtenerSuministrosController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await obtenerSuministros();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
