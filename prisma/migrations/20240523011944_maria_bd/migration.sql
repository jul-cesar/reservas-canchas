-- DropForeignKey
ALTER TABLE "suministrosadicionales" DROP CONSTRAINT "suministrosadicionales_ibfk_1";

-- AddForeignKey
ALTER TABLE "suministrosadicionales" ADD CONSTRAINT "suministrosadicionales_ibfk_1" FOREIGN KEY ("IDReserva") REFERENCES "reservas"("IDReserva") ON DELETE SET NULL ON UPDATE CASCADE;
