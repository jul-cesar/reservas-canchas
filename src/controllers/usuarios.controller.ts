import { Request, Response } from "express";
import { registrarUsuario } from "../services/usuarios";

export const registrarUsuarioController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await registrarUsuario(req.body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
