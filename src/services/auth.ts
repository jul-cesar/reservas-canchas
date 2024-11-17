import { prisma } from "../config/prisma";
import { Auth } from "../models/auth.model";
import { Usuario } from "../models/usuario.model";

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

export const Register = async ({
  Apellido,
  password,
  Nombre,
  Telefono,
  email,
}: Omit<Usuario & Auth, "IDUsuario">) => {
  const userExists = await prisma.usuarios.findFirst({
    where: { CorreoElectronico: email },
  });

  if (userExists) {
    return "Correo ya registrado";
  }

  const newUser = await prisma.usuarios.create({
    data: {
      Apellido,
      Contrase_a: password,
      CorreoElectronico: email,
      Nombre,
      Telefono,
    },
  });
  const data = {
    newUser,
  };
  return data;
};
