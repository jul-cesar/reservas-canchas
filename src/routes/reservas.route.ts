import { Router } from "express";
import {
  crearReservaController,
  obtenerReservasCanchaController,
  obtenerReservasController,
  obtenerReservasUserController,
  obtenerUnaReservaController,
  updateReservaController,
} from "../controllers/reservas.controller";
import { obtenerReservas } from "../services/reservas";

export const reservasRutas = Router();
reservasRutas.get("/reserva", obtenerReservasController);
reservasRutas.get("/reserva/:id", obtenerReservasCanchaController);
reservasRutas.get("/reserva/una/:id", obtenerUnaReservaController);
reservasRutas.get("/reserva/user/:id", obtenerReservasUserController);

reservasRutas.post("/reserva", crearReservaController);
reservasRutas.put("/reserva/:id", updateReservaController);
reservasRutas.delete("/reserva/:id");
