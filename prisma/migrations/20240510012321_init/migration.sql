/*
  Warnings:

  - You are about to drop the column `Total` on the `suministrosadicionales` table. All the data in the column will be lost.
  - Made the column `EstadoPago` on table `facturas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `facturas` MODIFY `EstadoPago` ENUM('Pagada', 'Pendiente') NOT NULL;

-- AlterTable
ALTER TABLE `suministrosadicionales` DROP COLUMN `Total`;
