import { Request, Response } from "express";
import housing from "../housing.json";

export const getHousing = (req: Request, res: Response) => {
  const enlightenedData = housing.map((h: any) => {
    return {
      id: h.id,
      title: h.title,
      cover: h.cover,
    };
  });

  // return the modified housing with code 200
  res.json(enlightenedData);
};

export const getHousingById = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = housing.find((h: any) => h.id === id);
  if (data) {
    res.json(data);
  } else {
    res.status(404).send();
  }
};
