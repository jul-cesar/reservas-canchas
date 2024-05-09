import { Router } from "express";

export const canchasRutas = Router();

canchasRutas.post("/cancha");
canchasRutas.get("/cancha");
canchasRutas.get("/cancha/:id");
canchasRutas.put("/cancha/:id");
canchasRutas.delete("/cancha/:id");
