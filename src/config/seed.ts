// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding...`);

  // Add users
  const user1 = await prisma.usuarios.create({
    data: {
      Nombre: "John",
      Apellido: "Doe",
      CorreoElectronico: "johndoe@example.com",
      Contrase_a: "securepassword123",
      Telefono: "123456789",
      Rol: "User",
      DatosPago: "Visa **** 1234",
    },
  });

  const user2 = await prisma.usuarios.create({
    data: {
      Nombre: "Jane",
      Apellido: "Smith",
      CorreoElectronico: "janesmith@example.com",
      Contrase_a: "anotherpassword",
      Telefono: "987654321",
      Rol: "Admin",
      DatosPago: "Mastercard **** 5678",
    },
  });

  // Add canchas
  const cancha1 = await prisma.canchas.create({
    data: {
      Nombre: "Cancha Sintética Central",
      Direccion: "123 Main Street, Cityville",
      HoraApertura: "08:00",
      HoraCierre: "22:00",
      Dimensiones: "50x30m",
      Contacto: "admin@cancha.com",
      Descripcion: "A high-quality synthetic turf field ideal for soccer.",
      CapacidadMaxima: 22,
      TipoSuperficie: "sintetica",
      Disponibilidad: "Disponible",
      Precio: 75.000,
      ImgURL: "https://example.com/images/cancha1.jpg",
    },
  });

  const cancha2 = await prisma.canchas.create({
    data: {
      Nombre: "Cancha de Césped Norte",
      Direccion: "456 Elm Street, Greentown",
      HoraApertura: "09:00",
      HoraCierre: "20:00",
      Dimensiones: "60x40m",
      Contacto: "contact@northfield.com",
      Descripcion: "A natural grass field perfect for friendly matches.",
      CapacidadMaxima: 30,
      TipoSuperficie: "cesped",
      Disponibilidad: "NoDisponible",
      Precio: 100.000,
      ImgURL: "https://example.com/images/cancha2.jpg",
    },
  });

  // Add reservas
  await prisma.reservas.create({
    data: {
      IDUsuario: user1.IDUsuario,
      IDCancha: cancha1.IDCancha,
      FechaReserva: new Date("2024-11-20T14:00:00"),
      HoraInicio: "14:00",
      HoraFinalizacion: "16:00",
      Duracion: 2,
      Estado: "Confirmada",
      MetodoPago: "TarjetaDeCredito",
      MontoPagado: 150.000,
    },
  });

  // Add comments
  await prisma.comentarios.createMany({
    data: [
      {
        IDUsuario: user1.IDUsuario,
        IDCancha: cancha1.IDCancha,
        Contenido: "Amazing field! The turf is well-maintained.",
      },
      {
        IDUsuario: user2.IDUsuario,
        IDCancha: cancha2.IDCancha,
        Contenido: "Loved playing here. The grass is fantastic.",
      },
    ],
  });

  // Add facturas
  await prisma.facturas.create({
    data: {
      IDReserva: 1,
      MontoTotal: 150.000,
      EstadoPago: "Pagada",
    },
  });

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
