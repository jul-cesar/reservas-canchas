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

export const obtenerUnaReserva = async (id: number) => {
  const todasLasReservas = await prisma.reservas.findUnique({
    where: { IDReserva: id },
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

export const obtenerReservasUser= async (id: number) => {
  const todasLasReservas = await prisma.reservas.findMany({
    where: { IDUsuario: id },
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
  console.log(verificarCancha?.reservas);

  const [horaInicioNueva, minutoInicioNueva, segundoInicioNueva] =
    data.HoraInicio.split(":").map(Number);
  const [horaFinalNueva, minutoFinalNueva, segundoFinalNueva] =
    data.HoraFinalizacion.split(":").map(Number);
  const fechaReserva = new Date(data.FechaReserva);

  const horaInicioNuevaReserva = new Date(fechaReserva);
  horaInicioNuevaReserva.setHours(
    horaInicioNueva,
    minutoInicioNueva,
    segundoInicioNueva,
    0
  );

  const horaFinalNuevaReserva = new Date(fechaReserva);
  horaFinalNuevaReserva.setHours(
    horaFinalNueva,
    minutoFinalNueva,
    segundoFinalNueva,
    0
  );

  for (let reserva of verificarCancha?.reservas ?? []) {
    const fechaReservaExistente = new Date(reserva.FechaReserva);
    const [horaInicioExistente, minutoInicioExistente, segundoInicioExistente] =
      reserva.HoraInicio.split(":").map(Number);
    const [horaFinalExistente, minutoFinalExistente, segundoFinalExistente] =
      reserva.HoraFinalizacion.split(":").map(Number);

    const horaInicioReservaExistente = new Date(fechaReservaExistente);
    horaInicioReservaExistente.setHours(
      horaInicioExistente,
      minutoInicioExistente,
      segundoInicioExistente,
      0
    );

    const horaFinalReservaExistente = new Date(fechaReservaExistente);
    horaFinalReservaExistente.setHours(
      horaFinalExistente,
      minutoFinalExistente,
      segundoFinalExistente,
      0
    );

    // Verificar si las fechas coinciden
    if (fechaReserva.getTime() === fechaReservaExistente.getTime()) {
      // Verificar si hay solapamiento de intervalos
      if (
        horaInicioNuevaReserva < horaFinalReservaExistente &&
        horaFinalNuevaReserva > horaInicioReservaExistente
      ) {
        return {
          message: "Cancha ya reservada en el intervalo de tiempo seleccionado",
        };
      }
    }
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
      HoraFinalizacion: data.HoraFinalizacion,
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

  await prisma.notificaciones.create({
    data: {
      Tipo: "Confirmacion",
      Mensaje: "Su reserva ha sido creada y confirmada",
      IDUsuario: data.IDUsuario,
    },
  });

  return { message: "Reserva creada", response: nuevaReserva };
};

export const obtenerReservasCancha = async (IDCancha: number) => {
  const reservasCancha = await prisma.reservas.findMany({
    where: { IDCancha },
    include: {
      suministrosadicionales: true,
      canchas: true,
      facturas: true,
      usuarios: true,
    },
  });
  return reservasCancha;
};
export const updateReserva = async (id: number, data: Partial<Reserva>) => {
  const updatedReserva = await prisma.reservas.update({
    where: { IDReserva: id },
    data: {
      ...data,
      suministrosadicionales: data.suministrosadicionales
        ? {
            set: data.suministrosadicionales.map((id) => ({
              IDSuministro: id,
            })),
          }
        : undefined,
    },
  });
  return updatedReserva;
};
