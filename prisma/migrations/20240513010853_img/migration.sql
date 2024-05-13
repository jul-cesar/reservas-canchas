/*
  Warnings:

  - Made the column `Nombre` on table `canchas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Descripcion` on table `canchas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Precio` on table `canchas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Mensaje` on table `notificaciones` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "canchas" ADD COLUMN     "ImgURL" TEXT,
ALTER COLUMN "Nombre" SET NOT NULL,
ALTER COLUMN "Descripcion" SET NOT NULL,
ALTER COLUMN "Precio" SET NOT NULL;

-- AlterTable
ALTER TABLE "notificaciones" ALTER COLUMN "Mensaje" SET NOT NULL;
