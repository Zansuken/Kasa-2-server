"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/routes");
const housing_1 = require("./controllers/housing");
const loggers_1 = require("./middlewares/loggers");
const about_1 = require("./controllers/about");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get(routes_1.Routes.HOUSING, loggers_1.requestLoggerMiddleware, housing_1.getHousing);
app.get(routes_1.Routes.HOUSING_ID, loggers_1.requestLoggerMiddleware, housing_1.getHousingById);
app.get(routes_1.Routes.ABOUT, loggers_1.requestLoggerMiddleware, about_1.getAbout);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
