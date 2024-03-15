import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import housing from "./housing.json";
import { Routes } from "./routes/routes";
import { getHousing, getHousingById } from "./controllers/housing";
import { requestLoggerMiddleware } from "./middlewares/loggers";
import { getAbout } from "./controllers/about";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get(Routes.HOUSING, requestLoggerMiddleware, getHousing);
app.get(Routes.HOUSING_ID, requestLoggerMiddleware, getHousingById);

app.get(Routes.ABOUT, requestLoggerMiddleware, getAbout);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
