import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../utils/jwtUtils";
import { JWT_SECRET } from "../utils/helpers";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // @ts-ignore
  jwt.verify(token, JWT_SECRET, (err, payload: JwtPayload) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }

    if (req.originalUrl.includes("/admin")) {
      if (payload.role !== "ADMIN") {
        // return res.redirect("/");
        return res
          .status(403)
          .json({ error: "Access denied. Admin permission required." });
      }
    }

    req.user = payload;
    next();
  });
};
