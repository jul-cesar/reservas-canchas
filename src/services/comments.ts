import { prisma } from "../config/prisma";

export const AddComment = async (
  idUser: number,
  idCancha: number,
  content: string
) => {
  const canchaExist = await prisma.canchas.findUnique({
    where: {
      IDCancha: idCancha,
    },
   
  });

  if (!canchaExist) {
    return "cancha no existente";
  }
  const newComment = await prisma.comentarios.create({
    data: {
      Contenido: content,
      IDCancha: idCancha,
      IDUsuario: idUser,
    },
  });

  return newComment;
};

export const GetCommentsCancha = async (idCancha: number) => {
 const canchaExist = await prisma.canchas.findUnique({
    where: {
      IDCancha: idCancha,
    },
  });

  if (!canchaExist) {
    return "cancha no existente";
  }
  const comments = await prisma.comentarios.findMany({
    where: {
      IDCancha: idCancha
    },
    include: {
      usuarios: {select: {
        Nombre: true,
        IDUsuario: true
      }},
    },
  });

  return comments;
}
