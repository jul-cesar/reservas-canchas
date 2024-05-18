import { TipoSuperficie, Disponibilidad } from "@prisma/client";

export interface Cancha {
  IDCancha: number;
  Nombre: string;
  Descripcion: string;
  ImgURL?: string;
  createdAt?: Date
  TipoSuperficie: TipoSuperficie;
  Disponibilidad: Disponibilidad;
  Precio: number;
  HoraApertura: string;
  HoraCierre: string;
  CapacidadMaxima: number;
  Dimensiones: string;
  Direccion: string;
  Contacto: string
}
