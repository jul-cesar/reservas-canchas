import { Request, Response } from "express";
import { AddComment, GetCommentsCancha } from "../services/comments";

export const crearCommentController = async (req: Request, res: Response) => {
  try {
    const { IDUsuario, IDCancha, Contenido } = req.body;
    console.log(IDUsuario, IDCancha, Contenido)
    const response = await AddComment(IDUsuario, IDCancha, Contenido);
    if (response === "cancha no existente") {
      res.status(404).send({ error: response });
    }
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};



export const GetCommentsCanchaController = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
    const id = parseInt(req.params.id);
  
    const response = await GetCommentsCancha(id);
    if (response === "cancha no existente") {
      res.status(404).send({ error: response });
    }
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

