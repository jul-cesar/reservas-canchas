import { prisma } from "../config/prisma";

export const consultarNotificacionesUsuario = async (id: number) => {
  const notificacionesUser = await prisma.notificaciones.findMany({
    where: { IDUsuario: id },
    include: {
      usuarios: true,
    },
  });
  return notificacionesUser;
};
