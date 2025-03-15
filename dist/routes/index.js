"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const card_routes_1 = __importDefault(require("../modules/card/card.routes"));
const corsConfig = {
    origin: [
        "http://localhost:5000",
        "http://localhost:3000",
        "https://alimmah.dev/",
    ],
};
const router = (0, express_1.Router)();
router.use("/card", (0, cors_1.default)(corsConfig), card_routes_1.default);
exports.default = router;
