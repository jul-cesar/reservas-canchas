-- DropForeignKey
ALTER TABLE "reservas" DROP CONSTRAINT "reservas_ibfk_2";

-- DropForeignKey
ALTER TABLE "suministrosadicionales" DROP CONSTRAINT "suministrosadicionales_ibfk_1";

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_ibfk_2" FOREIGN KEY ("IDCancha") REFERENCES "canchas"("IDCancha") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suministrosadicionales" ADD CONSTRAINT "suministrosadicionales_ibfk_1" FOREIGN KEY ("IDReserva") REFERENCES "reservas"("IDReserva") ON DELETE SET NULL ON UPDATE NO ACTION;
