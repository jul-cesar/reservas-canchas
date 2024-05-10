import { TipoSuperficie, Disponibilidad } from "@prisma/client";

export interface Cancha {
  IDCancha: number;
  Nombre: string;
  Descripcion: string;
  TipoSuperficie: TipoSuperficie;
  Disponibilidad: Disponibilidad;
  precio: number;
}
