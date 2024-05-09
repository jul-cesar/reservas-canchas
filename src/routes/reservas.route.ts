import { Router } from "express";

export const reservasRutas = Router();
reservasRutas.get("/reserva");
reservasRutas.get("/reserva/:id");
reservasRutas.post("/reserva");
reservasRutas.put("/reserva/:id");
reservasRutas.delete("/reserva/:id");
