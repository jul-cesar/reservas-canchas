import { TipoSuperficie, Disponibilidad } from "@prisma/client";

export interface Cancha {
  IDCancha: number;
  Nombre: string;
  Descripcion: string;
  ImgURL?: string
  TipoSuperficie: TipoSuperficie;
  Disponibilidad: Disponibilidad;
  Precio: number;
}
