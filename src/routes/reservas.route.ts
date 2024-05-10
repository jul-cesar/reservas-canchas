import { Router } from "express";
import { crearReservaController, obtenerReservasController } from "../controllers/reservas.controller";
import { obtenerReservas } from "../services/reservas";

export const reservasRutas = Router();
reservasRutas.get("/reserva", obtenerReservasController);
reservasRutas.get("/reserva/:id");
reservasRutas.post("/reserva", crearReservaController);
reservasRutas.put("/reserva/:id");
reservasRutas.delete("/reserva/:id");
