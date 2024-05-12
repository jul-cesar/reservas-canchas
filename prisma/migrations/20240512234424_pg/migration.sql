-- CreateEnum
CREATE TYPE "TipoSuperficie" AS ENUM ('sintetica', 'cesped');

-- CreateEnum
CREATE TYPE "Disponibilidad" AS ENUM ('Disponible', 'NoDisponible');

-- CreateEnum
CREATE TYPE "EstadoPago" AS ENUM ('Pagada', 'Pendiente');

-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('Confirmacion', 'Recordatorio', 'Actualizacion');

-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('Confirmada', 'Pendiente');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('TarjetaDeCredito', 'TarjetaDeDebito', 'TransferenciaBancaria', 'Efectivo');

-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('User', 'Admin');

-- CreateTable
CREATE TABLE "canchas" (
    "IDCancha" SERIAL NOT NULL,
    "Nombre" VARCHAR(50),
    "Descripcion" TEXT,
    "TipoSuperficie" "TipoSuperficie" NOT NULL,
    "Disponibilidad" "Disponibilidad" NOT NULL,
    "Precio" DECIMAL(10,3),

    CONSTRAINT "canchas_pkey" PRIMARY KEY ("IDCancha")
);

-- CreateTable
CREATE TABLE "facturas" (
    "IDFactura" SERIAL NOT NULL,
    "IDReserva" INTEGER,
    "MontoTotal" DECIMAL(10,3),
    "FechaEmision" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "EstadoPago" "EstadoPago" NOT NULL,

    CONSTRAINT "facturas_pkey" PRIMARY KEY ("IDFactura")
);

-- CreateTable
CREATE TABLE "notificaciones" (
    "IDNotificacion" SERIAL NOT NULL,
    "IDUsuario" INTEGER,
    "Tipo" "Tipo" NOT NULL,
    "Mensaje" TEXT,
    "FechaHoraEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notificaciones_pkey" PRIMARY KEY ("IDNotificacion")
);

-- CreateTable
CREATE TABLE "reservas" (
    "IDReserva" SERIAL NOT NULL,
    "IDUsuario" INTEGER NOT NULL,
    "IDCancha" INTEGER NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "HoraInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Duracion" INTEGER,
    "Estado" "Estado" NOT NULL,
    "MetodoPago" "MetodoPago" NOT NULL,
    "MontoPagado" DECIMAL(10,3),

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("IDReserva")
);

-- CreateTable
CREATE TABLE "suministrosadicionales" (
    "IDSuministro" SERIAL NOT NULL,
    "IDReserva" INTEGER,
    "TipoSuministro" VARCHAR(50),
    "Cantidad" INTEGER,
    "CostoUnitario" DECIMAL(10,3),

    CONSTRAINT "suministrosadicionales_pkey" PRIMARY KEY ("IDSuministro")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "IDUsuario" SERIAL NOT NULL,
    "Nombre" VARCHAR(50),
    "Apellido" VARCHAR(50),
    "CorreoElectronico" VARCHAR(100),
    "Contraseña" VARCHAR(50),
    "Telefono" VARCHAR(15),
    "Rol" VARCHAR(20),
    "DatosPago" VARCHAR(100),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("IDUsuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "facturas_IDReserva_key" ON "facturas"("IDReserva");

-- CreateIndex
CREATE INDEX "IDCancha" ON "reservas"("IDCancha");

-- CreateIndex
CREATE INDEX "IDUsuario" ON "reservas"("IDUsuario");

-- CreateIndex
CREATE INDEX "IDReserva" ON "suministrosadicionales"("IDReserva");

-- AddForeignKey
ALTER TABLE "facturas" ADD CONSTRAINT "facturas_ibfk_1" FOREIGN KEY ("IDReserva") REFERENCES "reservas"("IDReserva") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notificaciones" ADD CONSTRAINT "notificaciones_ibfk_1" FOREIGN KEY ("IDUsuario") REFERENCES "usuarios"("IDUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_ibfk_1" FOREIGN KEY ("IDUsuario") REFERENCES "usuarios"("IDUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_ibfk_2" FOREIGN KEY ("IDCancha") REFERENCES "canchas"("IDCancha") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suministrosadicionales" ADD CONSTRAINT "suministrosadicionales_ibfk_1" FOREIGN KEY ("IDReserva") REFERENCES "reservas"("IDReserva") ON DELETE NO ACTION ON UPDATE NO ACTION;
