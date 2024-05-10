import { prisma } from "../config/prisma";

export const consultarTodasLasFacturas = async () => {
  const facturas = await prisma.facturas.findMany({
    include: { reservas: true },
  });
  return facturas;
};

export const consultarFacturasReserva = async (id: number) => {
  const facturasReserva = await prisma.facturas.findMany({
    where: { IDFactura: id },
    include: {
      reservas: true,
    },
  });
  return facturasReserva;
};
