import { Router } from "express";
import { LoginController, RegisterController } from "../controllers/auth.controller";

export const authRouter = Router();

authRouter.post("/auth/login", LoginController);
authRouter.post("/auth/register", RegisterController);
