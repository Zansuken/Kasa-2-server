"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLoggerMiddleware = void 0;
const requestLoggerMiddleware = (req, res, next) => {
    const time = new Date();
    const formattedTime = time.toLocaleString("fr-FR", {
        timeZone: "Europe/Paris",
    });
    const methodColor = (method) => {
        switch (method) {
            case "GET":
                return "\x1b[32m";
            case "POST":
                return "\x1b[34m";
            case "PUT":
                return "\x1b[33m";
            case "DELETE":
                return "\x1b[31m";
            default:
                return "\x1b[37m";
        }
    };
    console.log(`[${formattedTime}] ${methodColor(req.method)}${req.method}\x1b[0m ${req.originalUrl}`);
    next();
};
exports.requestLoggerMiddleware = requestLoggerMiddleware;
