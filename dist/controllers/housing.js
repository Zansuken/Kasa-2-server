"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHousingById = exports.getHousing = void 0;
const housing_json_1 = __importDefault(require("../housing.json"));
const getHousing = (req, res) => {
    const enlightenedData = housing_json_1.default.map((h) => {
        return {
            id: h.id,
            title: h.title,
            cover: h.cover,
        };
    });
    // return the modified housing with code 200
    res.json(enlightenedData);
};
exports.getHousing = getHousing;
const getHousingById = (req, res) => {
    const id = req.params.id;
    const data = housing_json_1.default.find((h) => h.id === id);
    if (data) {
        res.json(data);
    }
    else {
        res.status(404).send();
    }
};
exports.getHousingById = getHousingById;
