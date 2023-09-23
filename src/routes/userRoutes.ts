import express from "express";
import { getUserProfile } from "../controllers/userController";
import { authenticateToken } from "../middlewares/authentication";

const router = express.Router();

router.get("/profile", authenticateToken, getUserProfile);

export default router;
