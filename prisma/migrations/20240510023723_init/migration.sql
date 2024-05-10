-- DropForeignKey
ALTER TABLE `reservas` DROP FOREIGN KEY `reservas_ibfk_2`;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`IDCancha`) REFERENCES `canchas`(`IDCancha`) ON DELETE CASCADE ON UPDATE CASCADE;
