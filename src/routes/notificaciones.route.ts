import { Router } from "express";

export const notificacionesRutas = Router();

notificacionesRutas.get("/notificacion/:idUsuario");
notificacionesRutas.post("/notificacion");
notificacionesRutas.put("/notificacion/:id");
notificacionesRutas.delete("/notificacion/:id");
