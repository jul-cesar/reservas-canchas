import { Router } from "express";
import { consultarFacturasReservaController, consultarTodasLasFacturasController } from "../controllers/facturas.controller";

export const facturasRutas = Router()

facturasRutas.get("/factura", consultarTodasLasFacturasController)
facturasRutas.get("/factura/:idReserva", consultarFacturasReservaController)
facturasRutas.post("/factura")
facturasRutas.put("/factura")