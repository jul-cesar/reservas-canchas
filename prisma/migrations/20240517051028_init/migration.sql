-- DropForeignKey
ALTER TABLE "reservas" DROP CONSTRAINT "reservas_ibfk_2";

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_ibfk_2" FOREIGN KEY ("IDCancha") REFERENCES "canchas"("IDCancha") ON DELETE NO ACTION ON UPDATE CASCADE;
