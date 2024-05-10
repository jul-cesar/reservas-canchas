import { Router } from "express";
import { crearCanchaController, editarUnaCanchaController, eliminarCanchaController, obtenerTodasLasCanchasController, obtenerUnaCanchaController } from "../controllers/canchas.controller";


export const canchasRutas = Router();

canchasRutas.post("/cancha", crearCanchaController);
canchasRutas.get("/cancha", obtenerTodasLasCanchasController);
canchasRutas.get("/cancha/:id", obtenerUnaCanchaController);
canchasRutas.put("/cancha/:id", editarUnaCanchaController);
canchasRutas.delete("/cancha/:id", eliminarCanchaController);
