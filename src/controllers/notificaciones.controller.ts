import { Request, Response } from "express";

import { consultarNotificacionesUsuario } from "../services/notificaciones";

export const consultarNotificacionesUsuarioController = async (
  req: Request,
  res: Response
) => {
  const idUser = parseInt(req.params.idUsuario);
  try {
    const response = await consultarNotificacionesUsuario(idUser);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};
