"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gallery_controllers_1 = __importDefault(require("./gallery.controllers"));
const router = (0, express_1.Router)();
router.get("/get-all", gallery_controllers_1.default.getAllGallery);
router.post("/create", gallery_controllers_1.default.createGallery);
router.delete("/delete/:id", gallery_controllers_1.default.deleteGallery);
router.put("/edit/:id", gallery_controllers_1.default.editGallery);
exports.default = router;
