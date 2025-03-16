"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tool_controllers_1 = __importDefault(require("./tool.controllers"));
const router = (0, express_1.Router)();
router.get("/get-all", tool_controllers_1.default.getAllTool);
router.post("/create", tool_controllers_1.default.createTool);
router.delete("/delete/:id", tool_controllers_1.default.deleteTool);
router.put("/edit/:id", tool_controllers_1.default.editTool);
exports.default = router;
