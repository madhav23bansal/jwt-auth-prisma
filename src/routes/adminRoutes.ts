import express from "express";
import { getAdminDetails } from "../controllers/adminController";
import { authenticateToken } from "../middlewares/authentication";

const router = express.Router();

router.get("/me", authenticateToken, getAdminDetails);

export default router;
