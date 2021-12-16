import express from "express";
import { regsterView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", regsterView);

export default apiRouter;
