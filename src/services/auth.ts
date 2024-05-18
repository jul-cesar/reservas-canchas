import { prisma } from "../config/prisma";
import { Auth } from "../models/auth.model";

export const Login = async ({ email, password }: Auth) => {
  const userExists = await prisma.usuarios.findFirst({
    where: { CorreoElectronico: email },
  });
  if (!userExists) return "user not exist";

  if (password !== userExists.Contrase_a) {
    return "contraseña incorrecta";
  }

  const data = {
    userExists,
  };
  return data;
};
