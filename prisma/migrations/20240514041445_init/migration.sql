/*
  Warnings:

  - Added the required column `CapacidadMaxima` to the `canchas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "canchas" ADD COLUMN     "CapacidadMaxima" INTEGER NOT NULL;
