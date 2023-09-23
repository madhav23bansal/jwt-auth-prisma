// src/app.ts
import express from "express";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();
const port = 3000;

app.use(express.json());

// Define routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
