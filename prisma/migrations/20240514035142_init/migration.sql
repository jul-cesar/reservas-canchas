/*
  Warnings:

  - You are about to drop the column `Duracion` on the `reservas` table. All the data in the column will be lost.
  - Added the required column `Contacto` to the `canchas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Dimensiones` to the `canchas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Direccion` to the `canchas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HoraApertura` to the `canchas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HoraCierre` to the `canchas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "facturas" DROP CONSTRAINT "facturas_ibfk_1";

-- AlterTable
ALTER TABLE "canchas" ADD COLUMN     "Contacto" VARCHAR(100) NOT NULL,
ADD COLUMN     "Dimensiones" VARCHAR(50) NOT NULL,
ADD COLUMN     "Direccion" TEXT NOT NULL,
ADD COLUMN     "HoraApertura" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "HoraCierre" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "Nombre" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "reservas" DROP COLUMN "Duracion",
ADD COLUMN     "FechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "HoraInicio" DROP DEFAULT,
ALTER COLUMN "HoraInicio" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "facturas" ADD CONSTRAINT "facturas_ibfk_1" FOREIGN KEY ("IDReserva") REFERENCES "reservas"("IDReserva") ON DELETE CASCADE ON UPDATE NO ACTION;
