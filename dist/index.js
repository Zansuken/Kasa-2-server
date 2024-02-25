"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_json_1 = __importDefault(require("./data.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/housing", (req, res) => {
    const enlightenedData = data_json_1.default.map((h) => {
        return {
            id: h.id,
            title: h.title,
            cover: h.cover,
        };
    });
    // return the modified data with code 200
    res.json(enlightenedData);
});
app.get("/housing/:id", (req, res) => {
    const id = req.params.id;
    const housing = data_json_1.default.find((h) => h.id === id);
    if (housing) {
        res.json(housing);
    }
    else {
        res.status(404).send();
    }
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
