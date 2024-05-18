import { Login } from "../services/auth";
import { Request, Response } from "express";

export const LoginController = async (req: Request, res: Response) => {
  try {
    const response = await Login(req.body);
    if (response === "contraseña incorrecta" || response === "user not exist") {
      const errorMessage =
        response === "contraseña incorrecta"
          ? "Contraseña incorrecta"
          : "Usuario no existente";
      res.status(403).send({ error: errorMessage });
      return;
    }
    res.send(response.userExists);
  } catch (error: any) {
    console.error(error);
  }
};
