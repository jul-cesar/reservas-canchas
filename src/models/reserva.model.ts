export interface Reserva {
  IDReserva: number;
  IDUsuario: number;
  IDCancha: number;
  Fecha: Date;
  HoraInicio: Date;
  Duracion: number;
  Estado: string;
  MetodoPago: string;
  MontoPagado: number;
}
