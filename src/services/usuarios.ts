import { prisma } from "../config/prisma";
import { Usuario } from "../models/usuario.model";

export const registrarUsuario = async (data: Usuario) => {
  const nuevoUsuario = await prisma.usuarios.create({ data });
  return nuevoUsuario;
};
