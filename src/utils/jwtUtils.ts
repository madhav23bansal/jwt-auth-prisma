import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./helpers";

export interface JwtPayload {
  userId: number;
  email: string;
}

export const generateToken = (payload: JwtPayload): string => {
  //@ts-ignore
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
};
