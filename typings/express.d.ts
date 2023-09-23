declare namespace Express {
  export interface Request {
    user: {
      userId: number;
      email: string;
      // Add other user-related properties here (e.g., name)
    };
  }
}
