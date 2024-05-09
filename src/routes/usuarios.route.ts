import { Router } from "express";

export const usuariosRutas = Router();

usuariosRutas.post("/usuario");
usuariosRutas.get("/usuario");
usuariosRutas.get("/usuario/:id");
usuariosRutas.delete("/usuario");
usuariosRutas.put("/usuario");
