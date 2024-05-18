import { Estado, MetodoPago } from "@prisma/client";

export interface Reserva {
  IDReserva: number;
  IDUsuario: number;
  IDCancha: number;
  FechaCreacion: Date;
  FechaReserva: Date;
  HoraInicio: string;
  HoraFinalizacion: string;

  Duracion: number;
  Estado: Estado;
  MetodoPago: MetodoPago;
  suministrosadicionales: number[];
  MontoPagado: number;
}
