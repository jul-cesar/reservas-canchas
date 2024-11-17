import { Router } from "express";
import { crearCommentController, GetCommentsCanchaController } from "../controllers/comments.controller";

export const commentsRouter = Router();

commentsRouter.post("/comments", crearCommentController);
commentsRouter.get("/comments/:id", GetCommentsCanchaController);
