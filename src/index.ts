import Express from "express";
import cors from "cors";
import { canchasRutas } from "./routes/canchas.route";
import { reservasRutas } from "./routes/reservas.route";
import { usuariosRutas } from "./routes/usuarios.route";
import { suministrosRutas } from "./routes/suministros.route";
import { notificacionesRutas } from "./routes/notificaciones.route";
import { facturasRutas } from "./routes/facturas.route";

const PUERTO = 3000;

export const app = Express();
app.use(Express.json());

app.use(cors());
app.use(canchasRutas);
app.use(reservasRutas)
app.use(usuariosRutas)
app.use(suministrosRutas)
app.use(notificacionesRutas)
app.use(facturasRutas)

app.listen(PUERTO, () => {
  console.log(`App corriendo en el puerto ${PUERTO}`);
});
