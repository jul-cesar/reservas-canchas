/*
  Warnings:

  - You are about to drop the column `FechaInicio` on the `reservas` table. All the data in the column will be lost.
  - Added the required column `FechaReserva` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservas" DROP COLUMN "FechaInicio",
ADD COLUMN     "FechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "FechaReserva" TIMESTAMP(3) NOT NULL;
