/*
  Warnings:

  - You are about to alter the column `Precio` on the `canchas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.
  - You are about to alter the column `MontoTotal` on the `facturas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.
  - You are about to alter the column `MontoPagado` on the `reservas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.
  - You are about to alter the column `CostoUnitario` on the `suministrosadicionales` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,3)`.

*/
-- AlterTable
ALTER TABLE `canchas` MODIFY `Precio` DECIMAL(10, 3) NULL;

-- AlterTable
ALTER TABLE `facturas` MODIFY `MontoTotal` DECIMAL(10, 3) NULL;

-- AlterTable
ALTER TABLE `reservas` MODIFY `MontoPagado` DECIMAL(10, 3) NULL;

-- AlterTable
ALTER TABLE `suministrosadicionales` MODIFY `CostoUnitario` DECIMAL(10, 3) NULL;
