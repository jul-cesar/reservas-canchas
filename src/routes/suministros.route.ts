import { Router } from "express";
import { insertarSuministrosController, obtenerSuministrosController } from "../controllers/suministros.controller";

export const suministrosRutas = Router();

suministrosRutas.get("/suministro", obtenerSuministrosController);
suministrosRutas.post("/suministro", insertarSuministrosController);
