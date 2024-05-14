import { Estado, MetodoPago } from "@prisma/client";

export interface Reserva {
  IDReserva: number;
  IDUsuario: number;
  IDCancha: number;
 FechaInicio: Date
  HoraInicio: string;
  Duracion: number;
  Estado: Estado;
  MetodoPago: MetodoPago;
  suministrosadicionales: [number]
  MontoPagado: number;
}
