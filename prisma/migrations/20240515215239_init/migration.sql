/*
  Warnings:

  - Added the required column `HoraFinalizacion` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservas" ADD COLUMN     "HoraFinalizacion" TEXT NOT NULL,
ALTER COLUMN "Duracion" DROP NOT NULL;
