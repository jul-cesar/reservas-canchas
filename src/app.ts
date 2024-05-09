import Express from "express";
import cors from "cors";

const PUERTO = 3000;

export const app = Express();
app.use(Express.json());

app.use(cors());

app.listen(PUERTO, () => {
  console.log(`App corriendo en el puerto ${PUERTO}`);
});
