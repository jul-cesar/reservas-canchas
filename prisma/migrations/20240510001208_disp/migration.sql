/*
  Warnings:

  - Made the column `Disponibilidad` on table `canchas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `canchas` MODIFY `Disponibilidad` ENUM('Disponible', 'NoDisponible') NOT NULL;
