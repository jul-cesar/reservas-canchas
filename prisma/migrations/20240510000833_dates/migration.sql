/*
  Warnings:

  - Made the column `FechaHoraEnvio` on table `notificaciones` required. This step will fail if there are existing NULL values in that column.
  - Made the column `IDUsuario` on table `reservas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `IDCancha` on table `reservas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Fecha` on table `reservas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HoraInicio` on table `reservas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `reservas` DROP FOREIGN KEY `reservas_ibfk_1`;

-- DropForeignKey
ALTER TABLE `reservas` DROP FOREIGN KEY `reservas_ibfk_2`;

-- AlterTable
ALTER TABLE `facturas` MODIFY `FechaEmision` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `notificaciones` MODIFY `FechaHoraEnvio` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `reservas` MODIFY `IDUsuario` INTEGER NOT NULL,
    MODIFY `IDCancha` INTEGER NOT NULL,
    MODIFY `Fecha` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `HoraInicio` DATETIME(0) NOT NULL;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios`(`IDUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`IDCancha`) REFERENCES `canchas`(`IDCancha`) ON DELETE NO ACTION ON UPDATE NO ACTION;
