import { Router } from "express";
import toolControllers from "./tool.controllers";

const router = Router();

router.get("/get-all", toolControllers.getAllTool);
router.post("/create", toolControllers.createTool);
router.delete("/delete/:id", toolControllers.deleteTool);
router.put("/edit/:id", toolControllers.editTool);

export default router;
