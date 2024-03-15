import { Request, Response } from "express";
import about from "../about.json";

export const getAbout = (req: Request, res: Response) => {
  res.json(about);
};
