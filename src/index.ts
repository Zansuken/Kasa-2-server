import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import data from "./data.json";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/housing", (req: Request, res: Response) => {
  const enlightenedData = data.map((h: any) => {
    return {
      id: h.id,
      title: h.title,
      cover: h.cover,
    };
  });

  // return the modified data with code 200
  res.json(enlightenedData);
});

app.get("/housing/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const housing = data.find((h: any) => h.id === id);
  if (housing) {
    res.json(housing);
  } else {
    res.status(404).send();
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
