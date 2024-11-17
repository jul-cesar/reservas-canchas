-- CreateTable
CREATE TABLE "comentarios" (
    "IDComentario" SERIAL NOT NULL,
    "IDUsuario" INTEGER NOT NULL,
    "IDCancha" INTEGER NOT NULL,
    "Contenido" TEXT NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("IDComentario")
);

-- CreateIndex
CREATE UNIQUE INDEX "comentarios_IDUsuario_key" ON "comentarios"("IDUsuario");

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_IDUsuario_fkey" FOREIGN KEY ("IDUsuario") REFERENCES "usuarios"("IDUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_IDCancha_fkey" FOREIGN KEY ("IDCancha") REFERENCES "canchas"("IDCancha") ON DELETE CASCADE ON UPDATE CASCADE;
