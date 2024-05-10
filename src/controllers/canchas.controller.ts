import { Request, Response } from "express";
import {
  crearCancha,
  editarUnaCancha,
  eliminarCancha,
  obtenerTodasLasCanchas,
  obtenerUnaCancha,
} from "../services/canchas";

export const crearCanchaController = async (req: Request, res: Response) => {
  try {
    const response = await crearCancha(req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUnaCanchaController = async (
  req: Request,
  res: Response
) => {
  const idCancha = parseInt(req.params.id);
  try {
    const response = await obtenerUnaCancha(idCancha);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerTodasLasCanchasController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await obtenerTodasLasCanchas();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const editarUnaCanchaController = async (
  req: Request,
  res: Response
) => {
  const idCancha = parseInt(req.params.id);
  try {
    const response = await editarUnaCancha(idCancha, req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const eliminarCanchaController = async (req: Request, res: Response) => {
  const idCancha = parseInt(req.params.id);
  try {
    const response = await eliminarCancha(idCancha);
    res.send({ message: "Tarea eliminada", response });
  } catch (error) {
    console.error(error);
  }
};
