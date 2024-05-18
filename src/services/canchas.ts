import { prisma } from "../config/prisma";
import { Cancha } from "../models/cancha.model";

export const crearCancha = async (data: Cancha) => {
  const nuevaCancha = await prisma.canchas.create({
    data,
  });
  return nuevaCancha;
};
export const obtenerTodasLasCanchas = async () => {
  const canchasEncontrada = await prisma.canchas.findMany({
    orderBy: { createdAt: "desc" },
  });
  const canchasFormated = canchasEncontrada.map((p) => ({
    ...p,
    Precio: p.Precio.toFixed(3),
    // Convert the price from string to a Decimal instance
  }));
  return canchasFormated;
};

export const obtenerUnaCancha = async (id: number) => {
  const canchaEncontrada = await prisma.canchas.findUnique({
    where: { IDCancha: id },
    include: {
      reservas: true,
    },
  });
  return canchaEncontrada;
};

export const editarUnaCancha = async (id: number, data: Partial<Cancha>) => {
  const canchaEncontrada = await prisma.canchas.update({
    where: { IDCancha: id },
    data,
  });
  return canchaEncontrada;
};

export const eliminarCancha = async (id: number) => {
  const canchaEliminada = await prisma.canchas.delete({
    where: { IDCancha: id },
  });
  return canchaEliminada;
};
