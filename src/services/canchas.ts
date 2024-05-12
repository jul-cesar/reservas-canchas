import { prisma } from "../config/prisma";
import { Cancha } from "../models/cancha.model";

export const crearCancha = async (data: Cancha) => {
  const nuevaCancha = await prisma.canchas.create({
    data,
  });
  return nuevaCancha;
};
export const obtenerTodasLasCanchas = async () => {
  const canchasEncontrada = await prisma.canchas.findMany();
  console.log("Canchas get")
  return canchasEncontrada;
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
    where: { IDCancha: 1 },
  });
  return canchaEliminada;
};
