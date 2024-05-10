import { Estado, MetodoPago } from "@prisma/client";

export interface Reserva {
  IDReserva: number;
  IDUsuario: number;
  IDCancha: number;
  Fecha: Date;
  HoraInicio: Date;
  Duracion: number;
  Estado: Estado;
  MetodoPago: MetodoPago;
  suministrosadicionales: [number]
  MontoPagado: number;
}
