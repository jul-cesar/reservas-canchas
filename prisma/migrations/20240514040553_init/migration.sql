/*
  Warnings:

  - You are about to drop the column `Fecha` on the `reservas` table. All the data in the column will be lost.
  - Added the required column `Duracion` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservas" DROP COLUMN "Fecha",
ADD COLUMN     "Duracion" INTEGER NOT NULL;
