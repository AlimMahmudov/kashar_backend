import { Router } from "express";
import cardControllers from "./card.controllers";

const router = Router();

router.get("/get-all", cardControllers.getAllCard);
router.post("/create", cardControllers.createCard);
router.delete("/delete/:id", cardControllers.deleteCard);
router.put("/edit/:id", cardControllers.editCard);

export default router;
