/*
  Warnings:

  - You are about to alter the column `MontoPagado` on the `reservas` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(4))` to `Decimal(10,2)`.
  - Made the column `MetodoPago` on table `reservas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `reservas` MODIFY `MetodoPago` ENUM('TarjetaDeCredito', 'TarjetaDeDebito', 'TransferenciaBancaria', 'Efectivo') NOT NULL,
    MODIFY `MontoPagado` DECIMAL(10, 2) NULL;
