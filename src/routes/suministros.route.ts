import { Router } from "express";
import { insertarSuministrosController } from "../controllers/suministros.controller";

export const suministrosRutas = Router();

suministrosRutas.get("/suministro");
suministrosRutas.post("/suministro", insertarSuministrosController);
