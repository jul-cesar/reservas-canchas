import { Router } from "express";

export const facturasRutas = Router()

facturasRutas.get("/factura")
facturasRutas.get("/factura/:id")
facturasRutas.post("/factura")
facturasRutas.put("/factura")