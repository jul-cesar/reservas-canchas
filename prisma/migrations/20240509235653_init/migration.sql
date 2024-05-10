-- CreateTable
CREATE TABLE `canchas` (
    `IDCancha` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(50) NULL,
    `Descripcion` TEXT NULL,
    `TipoSuperficie` ENUM('sintetica', 'cesped') NOT NULL,
    `Disponibilidad` TINYINT NULL,
    `Precio` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`IDCancha`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facturas` (
    `IDFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `IDReserva` INTEGER NULL,
    `MontoTotal` DECIMAL(10, 2) NULL,
    `FechaEmision` DATE NULL,
    `EstadoPago` VARCHAR(20) NULL,

    INDEX `IDReserva`(`IDReserva`),
    PRIMARY KEY (`IDFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificaciones` (
    `IDNotificacion` INTEGER NOT NULL AUTO_INCREMENT,
    `IDUsuario` INTEGER NULL,
    `Tipo` ENUM('Confirmacion', 'Recordatorio', 'Actualizacion') NOT NULL,
    `Mensaje` TEXT NULL,
    `FechaHoraEnvio` DATETIME(0) NULL,

    INDEX `IDUsuario`(`IDUsuario`),
    PRIMARY KEY (`IDNotificacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservas` (
    `IDReserva` INTEGER NOT NULL AUTO_INCREMENT,
    `IDUsuario` INTEGER NULL,
    `IDCancha` INTEGER NULL,
    `Fecha` DATE NULL,
    `HoraInicio` TIME(0) NULL,
    `Duracion` INTEGER NULL,
    `Estado` ENUM('Confirmada', 'Pendiente') NOT NULL,
    `MetodoPago` VARCHAR(50) NULL,
    `MontoPagado` ENUM('TarjetaDeCredito', 'TarjetaDeDebito', 'TransferenciaBancaria', 'Efectivo') NOT NULL,

    INDEX `IDCancha`(`IDCancha`),
    INDEX `IDUsuario`(`IDUsuario`),
    PRIMARY KEY (`IDReserva`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suministrosadicionales` (
    `IDSuministro` INTEGER NOT NULL AUTO_INCREMENT,
    `IDReserva` INTEGER NULL,
    `TipoSuministro` VARCHAR(50) NULL,
    `Cantidad` INTEGER NULL,
    `CostoUnitario` DECIMAL(10, 2) NULL,
    `Total` DECIMAL(10, 2) NULL,

    INDEX `IDReserva`(`IDReserva`),
    PRIMARY KEY (`IDSuministro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `IDUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(50) NULL,
    `Apellido` VARCHAR(50) NULL,
    `CorreoElectronico` VARCHAR(100) NULL,
    `Contraseña` VARCHAR(50) NULL,
    `Telefono` VARCHAR(15) NULL,
    `Rol` VARCHAR(20) NULL,
    `DatosPago` VARCHAR(100) NULL,

    PRIMARY KEY (`IDUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `facturas` ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`IDReserva`) REFERENCES `reservas`(`IDReserva`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notificaciones` ADD CONSTRAINT `notificaciones_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios`(`IDUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios`(`IDUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`IDCancha`) REFERENCES `canchas`(`IDCancha`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `suministrosadicionales` ADD CONSTRAINT `suministrosadicionales_ibfk_1` FOREIGN KEY (`IDReserva`) REFERENCES `reservas`(`IDReserva`) ON DELETE NO ACTION ON UPDATE NO ACTION;
