"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const card_controllers_1 = __importDefault(require("./card.controllers"));
const router = (0, express_1.Router)();
router.get("/get-all", card_controllers_1.default.getAllCard);
router.post("/create", card_controllers_1.default.createCard);
router.delete("/delete/:id", card_controllers_1.default.deleteCard);
router.put("/edit/:id", card_controllers_1.default.editCard);
exports.default = router;
