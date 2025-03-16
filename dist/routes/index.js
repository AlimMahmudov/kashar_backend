"use strict";
// import { Router } from "express";
// import cors from "cors";
// import cardRoutes from "../modules/card/card.routes";
// import galleryRoutes from "../modules/gallery/gallery.routes";
// import toolRoutes from "../modules/tool/tool.routes";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const corsConfig = {
//   origin: [
//     "http://localhost:5000",
//     "http://localhost:3000",
//     "https://alimmah.dev/",
//   ],
// };
// const router = Router();
// router.use("/card", cors(corsConfig), cardRoutes);
// router.use("/gallery", cors(corsConfig), galleryRoutes);
// router.use("/tool", cors(corsConfig), toolRoutes);
// export default router;
const express_1 = require("express");
const card_routes_1 = __importDefault(require("../modules/card/card.routes"));
const gallery_routes_1 = __importDefault(require("../modules/gallery/gallery.routes"));
const tool_routes_1 = __importDefault(require("../modules/tool/tool.routes"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).send({
        status: true,
    });
});
router.use("/auth", card_routes_1.default);
router.use("/post", gallery_routes_1.default);
router.use("/upload", tool_routes_1.default);
exports.default = router;
