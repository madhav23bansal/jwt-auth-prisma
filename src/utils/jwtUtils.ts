import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./helpers";
import { UserRole } from "@prisma/client";

export interface JwtPayload {
  userId: number;
  email: string;
  role: UserRole;
}

export const generateToken = (payload: JwtPayload): string => {
  //@ts-ignore
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
};
