import express from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import adminRoutes from "./adminRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);

router.get("/", (req, res) => {
  res.send("Welcome to the landing page!");
});

router.get("/dashboard", (req, res) => {
  res.send("Welcome to the dashboard");
});

export default router;
