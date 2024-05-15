import { prisma } from "../config/prisma";
import { Reserva } from "../models/reserva.model";
import { editarUnaCancha, obtenerUnaCancha } from "./canchas";

export const obtenerReservas = async () => {
  const todasLasReservas = await prisma.reservas.findMany({
    include: {
      canchas: true,
      facturas: true,
      suministrosadicionales: true,
      usuarios: {
        select: {
          IDUsuario: true,
          Nombre: true,
          Apellido: true,
          CorreoElectronico: true,
          Telefono: true,
        },
      },
    },
  });
  return todasLasReservas;
};

interface responseReserva {
  message: string;
  response?: any;
}
export const crearReserva = async (data: Reserva): Promise<responseReserva> => {
  const verificarCancha = await obtenerUnaCancha(data.IDCancha);
  if (verificarCancha?.Disponibilidad == "NoDisponible") {
    return { message: "Cancha ya reservada" };
  }
  const nuevaReserva = await prisma.reservas.create({
    data: {
      IDUsuario: data.IDUsuario,
      IDCancha: data.IDCancha,
      FechaReserva: data.FechaReserva,
      HoraInicio: data.HoraInicio,
      Duracion: data.Duracion,
      Estado: data.Estado,
      MetodoPago: data.MetodoPago,
      MontoPagado: data.MontoPagado,

      suministrosadicionales: {
        connect: data?.suministrosadicionales?.map((id) => ({
          IDSuministro: id,
        })),
      },
    },
    include: {
      canchas: true,
      suministrosadicionales: true,
    },
  });

  const precioTotalSuministrosReserva =
    nuevaReserva.suministrosadicionales.reduce((total, s) => {
      return total + Number(s.CostoUnitario) || 0 * Number(s.Cantidad) || 0;
    }, 0);

  const montoTotalFactura =
    Number(nuevaReserva.canchas?.Precio || 0) + precioTotalSuministrosReserva;

  await prisma.facturas.create({
    data: {
      IDReserva: nuevaReserva.IDReserva,
      MontoTotal: montoTotalFactura,
      EstadoPago: "Pendiente",
    },
  });
  await editarUnaCancha(data.IDCancha, { Disponibilidad: "NoDisponible" });

  await prisma.notificaciones.create({
    data: {
      Tipo: "Confirmacion",
      Mensaje: "Su reserva ha sido creada y confirmada",
      IDUsuario: data.IDUsuario,
    },
  });

  return { message: "Reserva creada", response: nuevaReserva };
};
