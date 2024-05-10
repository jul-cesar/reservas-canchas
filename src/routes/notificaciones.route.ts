import { Router } from "express";
import { consultarNotificacionesUsuarioController } from "../controllers/notificaciones.controller";

export const notificacionesRutas = Router();

notificacionesRutas.get("/notificacion/:idUsuario", consultarNotificacionesUsuarioController);
notificacionesRutas.post("/notificacion");
notificacionesRutas.put("/notificacion/:id");
notificacionesRutas.delete("/notificacion/:id");
