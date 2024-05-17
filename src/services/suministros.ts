import { prisma } from "../config/prisma";
import { Suministro } from "../models/suministro.model";

export const insertarSuministros = async (data: Suministro[]) => {
  const nuevosSuministros = prisma.suministrosadicionales.createMany({ data });
  return nuevosSuministros
};


export const obtenerSuministros = async () => {
  const Suministros = prisma.suministrosadicionales.findMany();
  return Suministros
};