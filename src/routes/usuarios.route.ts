import { Router } from "express";
import { registrarUsuarioController } from "../controllers/usuarios.controller";

export const usuariosRutas = Router();

usuariosRutas.post("/usuario", registrarUsuarioController);
usuariosRutas.get("/usuario");
usuariosRutas.get("/usuario/:id");
usuariosRutas.delete("/usuario");
usuariosRutas.put("/usuario");
